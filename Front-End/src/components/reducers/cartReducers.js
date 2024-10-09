export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        // Check if the book already exists in the cart
        const alreadyExists = state.cartItems.find(
          (book) => book._id === action.payload._id
        );
        if (alreadyExists) {
          // If the book already exists, update its quantity/price
          return {
            ...state,
            cartItems: state.cartItems.map((book) =>
              book._id === action.payload._id ? action.payload : book
            ),
          };
        } else {
          // Otherwise, add the new book to the cart
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
      
      case "DELETE_FROM_CART":
        // Remove the book from the cart based on its _id
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (book) => book._id !== action.payload._id
          ),
        };
  
      default:
        return state;
    }
  };
  