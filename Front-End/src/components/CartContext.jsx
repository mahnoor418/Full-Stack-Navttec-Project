// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {

//   const [cartItems, setCartItems] = useState([]);

//   const gettotal = () => {
//     let totalamount = 0;
//     for (const item of cartItems) {
//       if (item.quantity > 0) {
//         totalamount += item.price * item.quantity;
//       }
//     }
//     totalamount += 17.88; // Add shipping cost
//     return totalamount;
//   };

//   const addItem = (item) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(i => i.id === item.id);
//       if (existingItem) {
//         return prevItems.map(i =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   const removeItem = (id) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
//   };

//   const updateItem = (id, quantity) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addItem, removeItem, updateItem, gettotal }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useContext, useState, useEffect } from 'react';
import AddtoCart from './AddtoCart';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the app starts
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      console.log("Loading cart from localStorage:", JSON.parse(savedCart));  // Debug log
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart items to localStorage whenever the cartItems state changes
  useEffect(() => {
    console.log("Saving cart to localStorage:", cartItems);  // Debug log
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const gettotal = () => {
    let totalamount = 0;
    for (const item of cartItems) {
      if (item.quantity > 0) {
        totalamount += item.price * item.quantity;
      }
    }
    totalamount += 17.88; // Add shipping cost
    return totalamount;
  };

  const addToCart = (product) => {
       const newItem = {
      productId: product.id, // Ensure this is set correctly
      title: product.title,
      price: product.price,
      quantity: 1, // Or however you're determining the quantity
    };
  }
  const addItem = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateItem = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, addItem, removeItem, updateItem, gettotal }}>
      {children}
    </CartContext.Provider>
  );
};

