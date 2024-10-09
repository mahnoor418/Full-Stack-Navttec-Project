import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./Routes/User-routes.js";  // Fix the path here
import productRoute from "./Routes/product-routes.js";
import orderRoutes from "./Routes/order-route.js";
import categoryRoutes from "./Routes/category-route.js";
import reviewRoute from "./Routes/review-route.js";
import wishlistRoute from "./Routes/wishlist-route.js";
import uploadProductImage from "./Routes/product-routes.js";
import loginsystem from "./Routes/loginsystem-route.js";
import path from "path";
import { fileURLToPath } from "url";
import cartRoute from "./Routes/cart-routes.js";

dotenv.config();

const app = express();
app.use(cors({
  credentials: true 
}));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.use("/user", userRoutes); // Make sure the path is correct
app.use("/cart",  cartRoute)
app.use("/product", productRoute);
app.use("/order", orderRoutes);
app.use("/category", categoryRoutes);
app.use("/review", reviewRoute);
app.use("/wishlist", wishlistRoute);
app.use("/product-image", uploadProductImage);
app.use("/loginsystem", loginsystem)
const port = process.env.PORT || 5000;
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
