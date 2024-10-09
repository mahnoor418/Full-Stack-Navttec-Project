import express from 'express';
import { addProduct, deleteProduct,updateProduct, getproduct, getProductById, getProductByUserId , uploadProductImageHandler} from '../Controller/product-controller.js';
import uploadProductImage from '../Utils/product-helper.js'; 
import {authenticate} from '../Middleware/user_middleware.js'
const productRoute = express.Router();

productRoute.post('/uploadProductImage');
productRoute.post("/createproduct" ,uploadProductImage.single('image'), uploadProductImageHandler);
productRoute.get("/getproduct", getproduct);
productRoute.get("/getproduct/:id", getProductById);
productRoute.delete("/deleteproduct/:id" , deleteProduct)
productRoute.get("/productbyuser/:id" , getProductByUserId);
productRoute.put('/updateproduct/:id', updateProduct);
export default productRoute
