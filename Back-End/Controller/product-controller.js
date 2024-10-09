import jwt from "jsonwebtoken";
import product from "../Models/product-model.js";
import User from "../Models/user-model.js"; 

// Controllers/productController.js
export const uploadProductImageHandler = async(req, res) => {
    try {
        const { title , description , quantity , price , category } = req.body;
        const image = req.file && req.file.filename;

        const productData = new product({title , description , quantity , price , category , image });
        await productData.save();
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
       
        res.status(200).json({
            message: 'Product image uploaded successfully',
            message: "data saved succesfully", success: true , productData,
            file: req.file
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// without 
export const addProduct = async (req, res) => {
    try {
        // Proceed with adding the product without image upload
        let image_name = `${req.file.filename}`;
        const { title, description, quantity, price, category } = req.body;

        // Create a new product instance
        const productData = new product({ 
            title, 
            description, 
            quantity, 
            price, 
            category ,
            image:image_name
        });

        // Save the product to the database
        await productData.save();

        return res.status(200).json({ message: "Product saved successfully", success: true, productData });

    } catch (error) {
        console.error("Error saving product:", error);  // Log the error
        return res.status(500).json({ message: "Error saving product", error: error.message });
    }
}
// (Admin only)
// export const addProduct = async (req, res) => {
//     try {
//         // Get the token from the Authorization header
//         const token = req.headers.authorization?.split(" ")[1]; // Extract the token from "Bearer <token>"

//         if (!token) {
//             return res.status(401).json({ message: "No token provided, authorization denied." });
//         }

//         // Verify the token and get user ID
//         const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
//         const userId = decoded.userId; // Extract the user ID from the decoded token

//         // Find the user in the database
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found." });
//         }
//         if (user.role !== "admin") {
//             return res.status(403).json({ message: "You are not authorized." });
//         }

//         // Proceed with adding the product
//         const { url, title, description, quantity, price, category } = req.body;
//         const image = req.file && req.file.filename;

//         const productData = new product({ 
            
//             title, 
//             description, 
//             quantity, 
//             price, 
//             category, 
//             image, 
//             user: userId 
//         });

//         await productData.save();
//         return res.status(200).json({ message: "Data saved successfully", success: true, productData });

//     } catch (error) {
//         return res.status(500).json({ message: "Error saving product", error: error.message });
//     }
// }


export const getproduct = async (req, res) => {
    try {
        const getProducts = await product.find()
        return res.status(200).json({ success : true , getProducts});   
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

export const getProductById = async (req , res) => {
    try{
        const getProductId = req.params.id;
        const productData = await product.findById(getProductId);
        if (!productData) {
            return res.status(404).json({ message: "product not found" });

        }
        return res.status(200).json({ success: true, productData , message :"got product data"});   
    }
    catch(error){
            res.status(500).json(error.message);
    }
}


export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        console.log("Product ID to delete:", productId); // Log product ID to check if it's correct

        const deletedProduct = await product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully', success: true, deletedProduct });
    } catch (error) {
        console.error("Error deleting product:", error);  // Log the error for better debugging
        res.status(500).json({ message: 'Error deleting product', error });
    }
};


  export const getProductByUserId = async (req , res) => {
    try{
        const productData = await product.find().populate("user");
        return  res.status(200).json({ success: true, productData , message :"got product data"});
    }
    catch(error){
        res.status(500).json(error.message);
    }
  };
// update product 

export const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { title, category, description, quantity, price, image } = req.body;

    try {
        // Find the product by ID
        const Updateproduct = await product.findById(productId);

        if (!Updateproduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Update product fields with incoming data or keep existing data
        Updateproduct.title = title || Updateproduct.title;
        Updateproduct.category = category || Updateproduct.category;
        Updateproduct.description = description || Updateproduct.description;
        Updateproduct.quantity = quantity || Updateproduct.quantity;
        Updateproduct.price = price || Updateproduct.price;
        Updateproduct.image = image || Updateproduct.image;

        // Save the updated product
        const updatedProduct = await Updateproduct.save();

        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            updatedProduct
        });
    } catch (error) {
        console.error("Error updating product:", error);  
        res.status(500).json({ success: false, message: 'Error updating product', error: error.message });
    }
}
