import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer'; // Assuming cartReducer is saved in reducers folder

// Combine all reducers (you can add more reducers here)
const rootReducer = combineReducers({
  cart: cartReducer, // This is your cart reducer
  // Add other reducers here if needed (e.g., userReducer, productReducer)
});

// Get initial cart state from localStorage if available
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// Define the initial state of the store
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

// Middleware (thunk for async actions)
const middleware = [thunk];

// Create the Redux store and apply middleware
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
