import express from  'express';
import { addCategory, getAllCategories } from '../Controller/category-controller.js';

const categoryRoute = express.Router();

categoryRoute.post( "/" , addCategory);
categoryRoute.get("/getcategory" , getAllCategories);

export default  categoryRoute;