import express from 'express';
import  { addToWishlist, getWishlist, removeFromWishlist } from '../Controller/wishlist-controller.js';

const wishlistRoute = express.Router();

wishlistRoute.post('/addwish', addToWishlist);
wishlistRoute.get('/getwish', getWishlist);
wishlistRoute.post('/removewish', removeFromWishlist);

export default wishlistRoute;
