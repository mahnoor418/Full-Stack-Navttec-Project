import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // Load existing reviews from backend on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/fetchall`, { params: { productId: id } });
        setReviews(response.data.data || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (reviewText === '' || rating === 0) {
      toast.error('Please fill out the review and rating.');
      return;
    }

    try {
      const newReview = {
        productId: id,
        stars: rating,
        text: reviewText,
      };

      // Send the review data to the backend
      await axios.post('/api/reviews/addreview', newReview);

      // Update frontend state after submitting review
      setReviews((prevReviews) => [...prevReviews, { ...newReview, id: Date.now() }]);
      setReviewText('');
      setRating(0);
      toast.success('Review submitted successfully!');
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error('Failed to submit the review.');
    }
  };

  // Handle star rating
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Review</h1>

      {/* Toast messages */}
      <ToastContainer />

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="reviewText" className="block font-medium mb-2">
            Write your review:
          </label>
          <textarea
            id="reviewText"
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <span className="font-medium">Rating: </span>
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={star <= rating ? 'yellow' : 'gray'}
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleRating(star)}
            >
              <path d="M9.049 2.927C9.362 2.074 10.638 2.074 10.951 2.927l1.502 4.633a1 1 0 00.95.69h4.873c.969 0 1.372 1.24.588 1.81l-3.94 2.854a1 1 0 00-.363 1.118l1.502 4.633c.313.853-.755 1.562-1.539 1.11L10 15.347l-3.94 2.854c-.784.452-1.852-.257-1.539-1.11l1.502-4.633a1 1 0 00-.363-1.118L1.72 10.06c-.784-.57-.38-1.81.588-1.81h4.873a1 1 0 00.95-.69l1.502-4.633z" />
            </svg>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="space-y-4 mt-4">
            {reviews.map((review, idx) => (
              <li
                key={idx}
                className="border border-gray-300 p-4 rounded-md"
              >
                <p className="mb-2">{review.text}</p>
                <div className="flex items-center">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="yellow"
                        className="w-5 h-5"
                      >
                        <path d="M9.049 2.927C9.362 2.074 10.638 2.074 10.951 2.927l1.502 4.633a1 1 0 00.95.69h4.873c.969 0 1.372 1.24.588 1.81l-3.94 2.854a1 1 0 00-.363 1.118l1.502 4.633c.313.853-.755 1.562-1.539 1.11L10 15.347l-3.94 2.854c-.784.452-1.852-.257-1.539-1.11l1.502-4.633a1 1 0 00-.363-1.118L1.72 10.06c-.784-.57-.38-1.81.588-1.81h4.873a1 1 0 00.95-.69l1.502-4.633z" />
                      </svg>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reviews;
