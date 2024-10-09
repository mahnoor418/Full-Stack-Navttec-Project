import  Wishlist from '../Models/wishlist-model.js';


export const addToWishlist = async (req, res) => {
    try {
        const { productId } = req.body;
        let wishlist = await Wishlist.findOne({ user: req.user.userId });

        if (!wishlist) {
            wishlist = new Wishlist({ user: req.user.userId, products: [] });
        }

        if (!wishlist.products.includes(productId)) {
            wishlist.products.push(productId);
            await wishlist.save();
            return res.status(200).json({ message: 'Product added to wishlist', wishlist });
        } else {
            return res.status(400).json({ message: 'Product already in wishlist' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error adding to wishlist', error });
    }
};


export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ user: req.user.userId }).populate('products');
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wishlist', error });
    }
};


export const removeFromWishlist = async (req, res) => {
    try {
        const { productId } = req.body;
        const wishlist = await Wishlist.findOne({ user: req.user.userId });

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        wishlist.products = wishlist.products.filter(p => p.toString() !== productId);
        await wishlist.save();
        res.status(200).json({ message: 'Product removed from wishlist', wishlist });
    } catch (error) {
        res.status(500).json({ message: 'Error removing product from wishlist', error });
    }
};
