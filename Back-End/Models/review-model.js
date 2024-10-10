

import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  userId:{type:String},
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Ensure it's required
  stars: { type: Number, min: 1, max: 5, required: true }, // Ensure it's required
  text: { type: String, required: true }, // Ensure it's required
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
