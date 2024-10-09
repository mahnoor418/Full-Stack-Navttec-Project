import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type:String },
  cart: [
    {
      productId: { type: String},
      quantity: { type: Number},
      price: { type: Number }
    }
  ],
  totalAmount: { type: Number, required: true },
  shipping: { type: Number, default: 0 },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  creditCard: { type: String, required: true },
  expirationDate: { type: String, required: true },
  securityCode: { type: String, required: true },
  nameOnCard: { type: String, required: true }

});

const Order = mongoose.model('Order', orderSchema);
export default Order;
