import React from "react";

const HostelDetails = ({ hostel }) => {
  return (
    <div>
      <h4>Hostel: {hostel.name}</h4>
      <p>Address: {hostel.address}</p>
      <p>Postcode: {hostel.postcode}</p>
      <p>Phone: {hostel.phone}</p>
      <p>Email: {hostel.email}</p>
      <p>Description: {hostel.description}</p>
      {/* Add more elements for other attributes as needed */}
    </div>
  );
};

export default HostelDetails;
