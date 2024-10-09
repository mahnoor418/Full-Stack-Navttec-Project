// review-route.js
import express from 'express';
import { addReview, fetchAllReviews } from '../Controller/review-controller.js';
import { authenticate } from '../Middleware/user_middleware.js';

let reviewRoute = express.Router();

reviewRoute.post('/addreview', authenticate, addReview); // **Ensure authentication is applied**
reviewRoute.get('/fetchall',  fetchAllReviews); // **Authentication added here for fetching**

export default reviewRoute;


