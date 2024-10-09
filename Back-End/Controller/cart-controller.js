import Cart from "../Models/cart-model.js";

// Add or Update Cart Items
export const addToCart = async (req, res) => {
  try {
    const userId = req.user.userId; // Get user ID from the request object
    const { products } = req.body;

    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    if (cart) {
      products.forEach(newProduct => {
        const existingProductIndex = cart.products.findIndex(p => p.productId && p.productId.toString() === newProduct.productId);
    
        if (existingProductIndex > -1) {
          cart.products[existingProductIndex].quantity += newProduct.quantity;
        } else {
          if (newProduct.productId) { // Check if productId exists
            cart.products.push(newProduct);
          }
        }
      });
    } else {
      // If no cart exists, create one
      cart = new Cart({
        userId,
        products
      });
    }

    await cart.save();
    res.status(200).json({ success: true, message: 'Cart updated', cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Cart for Logged In User
export const getCart = async (req, res) => {
  try {
    const userId = req.user.userId; // Get user ID from the request object

    const cart = await Cart.findOne({ userId }).populate('products.productId');
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });

    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove Item from Cart
export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.userId; // Get user ID from the request object
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });

    cart.products = cart.products.filter(item => item.productId.toString() !== productId);
    await cart.save();

    res.status(200).json({ success: true, message: 'Item removed', cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
