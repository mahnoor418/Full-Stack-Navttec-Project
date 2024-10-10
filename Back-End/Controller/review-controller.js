import Review from '../Models/review-model.js';
import mongoose from 'mongoose';

// Fetch all reviews for a product
export const fetchAllReviews = async (req, res) => {
  try {
    // Fetch all reviews, populate 'userId' with 'username', and only select required fields
    const reviews = await Review.find()
    
    // Return reviews and average rating
    return res.status(200).json({
      reviews, // Return all reviews
      
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return res.status(500).json({ message: "Error fetching reviews." });
  }
};

// Add a new review
export const addReview = async (req, res) => {

  const userId = req.user.userId; // Get user ID from the request object
   
  const { productId, stars, text } = req.body;

  if (!productId || !stars || !text) {
    return res.status(400).json({ message: "Product ID, rating, and text are required." });
  }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid Product ID." });
  }

  try {
    const newReview = new Review({
      productId,
      userId, // Ensure userId is included
      stars,
      text,
    });

    await newReview.save();
    return res.status(201).json(newReview); // Return the newly created review object
  } catch (error) {
    console.error("Error adding review:", error);
    return res.status(500).json({ message: "Error adding review." });
  }
};
