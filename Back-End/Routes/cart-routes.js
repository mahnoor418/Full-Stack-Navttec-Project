import express from 'express';
import { addToCart, getCart, removeFromCart  } from '../Controller/cart-controller.js';
import {authenticate} from '../Middleware/user_middleware.js'
let cartRoute = express.Router();


cartRoute.get("/getcart",authenticate, getCart);
cartRoute.post("/addtocart" ,authenticate, addToCart);
cartRoute.post("/remove", removeFromCart);

export default cartRoute


