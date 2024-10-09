import express from  'express';
import { getPaymentByOrderId, processPayment } from '../Controller/payment-controller.js';
import { authenticate }  from '../Middleware/user_middleware.js'
const paymentRoute =  express.Router();

paymentRoute.post("/" , processPayment);
paymentRoute.get("/:id" , authenticate , getPaymentByOrderId);

export default paymentRoute;