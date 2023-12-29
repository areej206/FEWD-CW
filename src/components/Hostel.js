import React from "react";
import { useParams } from "react-router-dom";

const Hostel = ({ hostels }) => {
  const { id } = useParams();

  // Filter hostels based on hostelId
  const currentItem = hostels.filter((entry) => {
    return entry.id === id;
  }); 

  // Destructure name and address from currentItem
  const { name, address, postcode, phone, email, description } = currentItem.length > 0 ? currentItem[0] : {};

  return (
    <div>
      {currentItem.length > 0 ? (
        <div className="hostel-details">
          <h2>{name}</h2>
          <hr />
          <div className="details-section">
            <p><b>Address:</b> {address}</p>
            <p><b>Post code:</b> {postcode}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Description:</b> {description}</p>
          </div>
        </div>
      ) : (
        <h2><b>Hostel not found</b></h2>
      )}
    </div>


  );
};

export default Hostel;