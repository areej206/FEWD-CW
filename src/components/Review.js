import React from "react";
import HostelReviewItems from "./HostelReviewItems";
import { hostels } from "../data/data";

const Review = () => {
  // Function to handle the create review action (for demonstration purposes)
  const handleCreateReview = () => {
    // Add logic to handle review creation (e.g., navigate to a form page)
    console.log("Navigate to review creation page or perform action...");
  };

  return (
    <>
      <button className="btn btn-primary mt-2 mb-2" onClick={handleCreateReview}>Create Review</button>
      <HostelReviewItems hostelList={hostels} />
    </>
  );
};

export default Review;
