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

        if (response.ok) {
          setReviews(data.reviews); // Set reviews data
         
        } else {
          console.error(data.message);
        }
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
            <th>User</th>
            <th>Product ID</th>
            <th>Review</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <tr key={review._id}>
                <td>{review.userId}</td>
                <td>{review.productId}</td>
                <td>{review.text}</td> {/* Assuming the text field holds the review text */}
                <td>{review.stars}/5</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No reviews found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
