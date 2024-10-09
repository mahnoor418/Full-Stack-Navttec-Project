import Order from '../Models/order-model.js';

export const createOrder = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the incoming request body

        const userId = req.user.id; // Assuming req.user is set by middleware after token verification
        const { totalAmount, shipping, email, address, city, postalCode, creditCard , expirationDate , securityCode , nameOnCard } = req.body;

        // Get cart from the request body
        const cart = req.body.cart;

        // Validate required fields
        if (!totalAmount || !email || !address || !city || !postalCode || !creditCard || !expirationDate || !securityCode || !nameOnCard) {
            console.error('Validation failed:', req.body); // Log the validation error
            return res.status(400).json({
                success: false,
                message: "All fields are required to place the order",
            });
        }

        const newOrder = new Order({
            userId: userId,
            cart: cart, // Use the cart from the request body
            totalAmount: totalAmount,
            shipping: shipping || 0,
            email: email,
            address: address,
            city: city,
            postalCode: postalCode,
            creditCard: creditCard,
            expirationDate: expirationDate,
            securityCode: securityCode,
            nameOnCard: nameOnCard,
        });

        // Attempt to save the new order
        await newOrder.save();

        return res.status(201).json({
            success: true,
            message: "Order created successfully",
            order: newOrder,
        });
    } catch (error) {
        console.error('Internal server error:', error); // Log the internal server error
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    
};
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find(); // Fetch all orders from the database

        return res.status(200).json({
            success: true,
            orders: orders,
        });
    } catch (error) {
        console.error('Internal server error:', error); // Log the internal server error
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};
