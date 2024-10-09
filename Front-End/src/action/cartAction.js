export const addToCart = (book, quantity) => (dispatch, getState) => {
    const cartItem = {
      name: book.title,    // Changed from pizza.name to book.title
      _id: book._id,
      image: book.image,
      author: book.author, // Assuming book has an author field
      quantity: Number(quantity),
      price: book.price * quantity, // Book's price * quantity
    };
  
    // Add validation for quantity limits
    if (cartItem.quantity > 10) {
      alert("You can only add up to 10 books.");
    } else if (cartItem.quantity < 1) {
      // If the quantity is less than 1, remove the book from the cart
      dispatch({ type: "DELETE_FROM_CART", payload: book });
    } else {
      // Add or update the cart item
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  };
  
  export const deleteFromCart = (book) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: book });
    const cartItems = getState().cartReducer.cartItems; // Corrected cartItems spelling
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  