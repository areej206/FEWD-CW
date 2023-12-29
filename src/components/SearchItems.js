import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const SearchItems = ({ hostel }) => {
  return (
    <div>
      <Accordion.Header>{hostel.name}</Accordion.Header>
      <Accordion.Body>
        <p><b>Address: </b>{hostel.address}</p>
        <p><b>Description: </b>{hostel.description}</p>
      </Accordion.Body>
    </div>
  );
};
export default SearchItems;