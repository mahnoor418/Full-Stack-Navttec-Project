import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
   
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Assuming you have a Product model
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      },
     
    }
  ]
}, { timestamps: true });
const Cart = mongoose.model('Cart', CartSchema);
export default Cart;