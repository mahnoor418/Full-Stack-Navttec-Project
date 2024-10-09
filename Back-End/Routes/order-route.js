// routes/order-route.js
import express from 'express';
import { createOrder ,getAllOrders} from '../Controller/order-controller.js';
import { authenticate } from '../Middleware/user_middleware.js'; // Ensure this is the right path

const orderRoute = express.Router();

orderRoute.post('/create', authenticate, createOrder);

orderRoute.get('/getorder',getAllOrders );
export default orderRoute;
