import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { cartItems, gettotal } = useCart();
  const [formData, setFormData] = useState({
    shipping: 17.88,
    totalAmount: gettotal(),
    email: '',
    address: '',
    city: '',
    postalCode: '',
    creditCard: '',
    expirationDate: '',
    securityCode: '',
    nameOnCard: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      // Create order data
      const userId = localStorage.getItem('userId'); // Adjust this if the ID is stored differently
      const orderData = {
        cart: cartItems.map(item => ({
          productId: item.id, // Assuming `id` corresponds to productId
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount: formData.totalAmount,
        shipping: formData.shipping,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        creditCard: formData.creditCard,
        expirationDate: formData.expirationDate,
        securityCode: formData.securityCode,
        nameOnCard: formData.nameOnCard,
        userId // Include userId in the order data
      };

      // Make API call to create order
      const response = await axios.post('http://localhost:5000/order/create', orderData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you are using a token for authentication
        }
      });

      toast.success('Your order is placed successfully!');
      // Optionally clear cart or navigate to a different page

    } catch (error) {
      console.error('Error during order placement:', error);
      toast.error('Error placing order. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-start py-10 bg-gray-100">
      <ToastContainer />

      {/* Checkout Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-4">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <input
          type="email"
          name="email"
          placeholder="Email or mobile phone number"
          className="w-full p-2 mb-4 border rounded-lg"
          onChange={handleInputChange}
        />

        <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full p-2 mb-4 border rounded-lg"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full p-2 border rounded-lg"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal code"
          className="w-full p-2 mb-4 border rounded-lg"
          onChange={handleInputChange}
        />

        <h2 className="text-2xl font-semibold mb-4">Payment</h2>
        <input
          type="text"
          name="creditCard"
          placeholder="Credit card number"
          className="w-full p-2 mb-4 border rounded-lg"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="expirationDate"
          placeholder="Expiration date (MM / YY)"
          className="w-full p-2 border rounded-lg"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="securityCode"
          placeholder="Security code"
          className="w-full p-2 mb-4 border rounded-lg"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="nameOnCard"
          placeholder="Name on card"
          className="w-full p-2 mb-4 border rounded-lg"
          onChange={handleInputChange}
        />

        <button
          className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          onClick={handleSubmit}
        >
          Buy now
        </button>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs mx-4 mt-10 md:mt-0">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {/* Dynamic Cart Items */}
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.title} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}

        <div className="flex justify-between items-center mb-2">
          <span>Subtotal</span>
          <span>${gettotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Shipping</span>
          <span>${formData.shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center font-semibold text-lg">
          <span>Total</span>
          <span>${(gettotal() + formData.shipping).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
