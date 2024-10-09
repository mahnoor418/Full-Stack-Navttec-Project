import React, { useEffect, useState } from 'react';
import './reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/review/fetchall');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-container">
      <h2>All Review List</h2>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>User_Id</th>
            <th>Product_ID</th>
            <th>Review</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <tr key={review._id}>
                <td>{review.product_id}</td>
                <td>{review.User_id}</td>
                <td>{review.reviewText}</td>
                <td>{review.rating}/5</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No reviews found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
