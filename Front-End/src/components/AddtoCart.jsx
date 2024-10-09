// import React from 'react';
// import { useCart } from '../components/CartContext';
// import { asset } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

// const AddtoCart = () => {
//   const { cartItems, removeItem, updateItem } = useCart();
//   const navigate = useNavigate();

//   const handleQuantityChange = (id, quantity) => {
//     if (quantity <= 0) {
//       removeItem(id);
//     } else {
//       updateItem(id, quantity);
//     }
//   };

//   const handleContinueShopping = () => {
//     navigate('/products');
//   };

//   const handleCheckout = async () => {
//     try {
//       // Prepare the data to send to the backend
//       const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//       const cartData = {
//         cartItems,
//         totalAmount,
//         user: "userId123" // Replace with real user ID if available
//       };

//       // Send the cart data to the backend
//       const response = await fetch('http://localhost:5000/cart/save', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(cartData),
//       });

//       if (response.ok) {
//         // Show success toast
//         toast.success('Your cart data is saved! Proceed to checkout.');
//         navigate('/checkout');
//       } else {
//         throw new Error('Failed to save cart');
//       }
//     } catch (error) {
//       // Show error toast
//       toast.error('Something went wrong while saving your cart');
//     }
//   };

//   return (
//     <div className='parent div'>
//       {/* Header Section */}
//       <div className="text-center text-black mb-12 text-4xl font-bold mb-2">
//         <div className="inset-0 bg-cover pt-[100px] pb-[50px]" style={{ backgroundImage: `url(${asset.bg})` }}>
//           <h1 className="text-black">Your Cart</h1>
//           <p className="text-black">Products/ Cart</p>
//         </div>
//       </div>

//       <div className="cart-page">
//         <img src={asset.cartimage} alt="cart icon" className="w-16 h-16 mt-8 mx-auto" />

//         {cartItems.length === 0 ? (
//           <p className='text-3xl text-red-600 font-extrabold text-center p-[30px] mb-12'>Your cart is empty.</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} className="cart-item flex text-3xl p-[50px] font-bold items-center justify-between gap-20">
//               {/* Book Image */}
//               <div className="w-32 h-32">
//                 <img src={item.image} alt={item.title} className="object-cover w-full h-full rounded" />
//               </div>

//               {/* Book Info */}
//               <div>
//                 <h2>{item.title}</h2>
//                 <p>{item.price}</p>
//               </div>

//               {/* Quantity and Remove Button */}
//               <div>
//                 <input
//                   type="number"
//                   value={cartItems[item.id]} // Adjusted to cartItems[item.id] for the current quantity
//                   min="0"
//                   onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                   className="w-16 p-2 border rounded"
//                 />
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded ml-2"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         )}

//         {/* Continue Shopping and Buy Now Buttons */}
//         <div className="text-center mt-8">
//           <button
//             className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
//             onClick={handleContinueShopping}
//           >
//             Continue Shopping
//           </button>
//           <div>
//             <button
//               className="bg-red-600 mb-8 text-white px-6 py-3 pl-[30px] rounded hover:bg-red-500"
//               onClick={handleCheckout}
//             >
//               Check-Out
//             </button>
//           </div>
//         </div>

//         {/* Toast container for feedback */}
//         <Toaster />
//       </div>
//     </div>
//   );
// };

// export default AddtoCart;

import React, { useState ,useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { asset } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

// const AddtoCart = () => {
//   const { cartItems, removeItem, updateItem, gettotal } = useCart();
//   const navigate = useNavigate();

  const AddtoCart = () => {
    const { cartItems, removeItem, updateItem, gettotal } = useCart();
  const navigate = useNavigate();
    const [selectedProducts, setSelectedProducts] = useState([]);
  
    const saveCartToBackend = async () => {
      const cartProducts = selectedProducts.map(product => ({
        productId: product._id.toString(), // Ensure it's a string
        quantity: product.quantity // Ensure you have a quantity field
      }));
  
      const cartData = { products: cartProducts };
  
      try {
        const response = await axios.post('http://localhost:5000/cart/addtocart', cartData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log('Cart updated:', response.data);
        toast.success('Your cart has been saved successfully!');
      } catch (error) {
        console.error('Error saving cart:', error);
        toast.error('Error saving cart. Please try again.'); 
      }
    };

  // Add a unique key when mapping over cartItems
  {cartItems.map((item, index) => {
    console.log(`Item ${index}:`, item); // Log each item to inspect
    if (!item || !item.productId) {
      console.error(`Missing productId for item at index ${index}`, item);
      return null; // Skip rendering for this item
    }
  
    return (
      <div key={item.productId} className="flex items-center bg-gray-100 p-4 rounded-lg">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
        <h3 className="text-lg font-semibold mx-4">{item.title}</h3>
        <p className="text-gray-600 mx-4">${Number(item.price).toFixed(2)}</p>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateItem(item.productId, parseInt(e.target.value))}
          min="1"
          className="w-16 text-center border border-gray-300 rounded-md mx-2"
        />
        <button
          onClick={() => handleRemoveItem(item.productId)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-auto"
        >
          Remove
        </button>
      </div>
    );
  })}
  useEffect(() => {
    if (cartItems.length > 0) {
      saveCartToBackend();
    }
  }, [cartItems]);

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <div className="p-6">
      <div className="w-16 h-16 mt-8 mx-auto">
        <img src={asset.cartimage} alt="Cart" className="w-10 h-10" />
        <span className="bg-red-600 text-white rounded-full px-2 py-1 text-sm">
          {cartItems.length}
        </span>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>) : 

          
          (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => {
                // Log the price for debugging
                console.log(`Item Price: ${item.price}, Type: ${typeof item.price}`);

                return (
                  <div key={item.id} className="flex items-center bg-gray-100 p-4 rounded-lg">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mx-4">{item.title}</h3>
                    <p className="text-gray-600 mx-4">${Number(item.price).toFixed(2)}</p> {/* Ensure price is a number */}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, parseInt(e.target.value))}
                      min="1"
                      className="w-16 text-center border border-gray-300 rounded-md mx-2"
                    />
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-auto"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Total: ${gettotal().toFixed(2)}</h3>
              <p className="text-gray-500">Shipping included: $17.88</p>
            </div>

            <div className="text-center mt-8 flex justify-between">
              <button
                className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="bg-red-600 mb-8 text-white px-6 py-3 pl-[30px] rounded hover:bg-red-500"
                onClick={handleCheckout}
              >
                Check-Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddtoCart;
