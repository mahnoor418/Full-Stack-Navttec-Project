import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = ({ productId }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (reviewText === '' || rating === 0) {
      toast.error('Please fill out the review and rating.');
      return;
    }

    // Check for token in local storage
    const token = localStorage.getItem('token'); 
    if (!token) {
      toast.error('You must be logged in to submit a review.');
      return;
    }
    
    // Prepare the review data
    const newReview = {
      productId, // Use the productId prop passed to the component
      stars: rating,
      text: reviewText,
    };

    console.log("Submitting review with data:", newReview); // Log the data being sent
    console.log("Current Product ID:", productId); // Log the productId being used

    try {
      const response = await axios.post('http://localhost:5000/review/addreview', newReview, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      // Check response status
      if (response.status === 201) {
        setReviewText(''); // Clear the review text input
        setRating(0); // Reset the rating
        toast.success('Review submitted successfully!');
      } else {
        toast.error('Failed to submit the review.');
      }
    } catch (error) {
      console.error("Error submitting review:", error.response ? error.response.data : error.message);
      toast.error('Failed to submit the review.');
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Review</h1>
      <ToastContainer />
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

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
