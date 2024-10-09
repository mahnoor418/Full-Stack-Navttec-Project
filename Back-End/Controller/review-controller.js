import Review from '../Models/review-model.js';

// Fetch all reviews for a product
export const fetchAllReviews = async (req, res) => {
  const { productId } = req.query;

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required." });
  }

  try {
    const reviews = await Review.find({ productId }).populate('userId', 'username');
    const hasReviewAdded = reviews.length > 0;

    const averageRating = hasReviewAdded 
      ? reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length 
      : 0;

    return res.status(200).json({
      data: reviews,
      averageRating: averageRating > 0 ? averageRating.toFixed(1) : 0,
      hasReviewAdded,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return res.status(500).json({ message: "Error fetching reviews." });
  }
};

// Add a new review
export const addReview = async (req, res) => {
  const { productId, stars, text } = req.body;

  if (!productId || !stars || !text) {
    return res.status(400).json({ message: "Product ID, rating, and text are required." });
  }

  try {
    const newReview = new Review({
      productId,
      userId: req.user.id, // Assuming req.user contains user info from authentication middleware
      stars,
      text,
    });

    await newReview.save();

    return res.status(201).json({ message: "Review added successfully." });
  } catch (error) {
    console.error("Error adding review:", error);
    return res.status(500).json({ message: "Error adding review." });
  }
};
