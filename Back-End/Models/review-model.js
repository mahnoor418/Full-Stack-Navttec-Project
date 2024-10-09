

// review-model.js
import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  stars: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


  const Review = mongoose.model('Review', ReviewSchema);
export default Review;
