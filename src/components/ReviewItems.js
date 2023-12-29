import React from "react";

const ReviewItems = ({ hostel }) => {
  return (
    <div className="review-container">
      <div className="hostel-info">
        <h2 className="hostel-name">{hostel.name}</h2>
        <p className="hostel-address"><b>Address: </b>{hostel.address}</p>
        <p className="hostel-description"><b>Description: </b>{hostel.description}</p>
      </div>
      <div className="reviews-list">
        {hostel.reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p className="reviewer-name">{review.reviewer}</p>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewItems;
