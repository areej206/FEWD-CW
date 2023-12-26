import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const HostelItem = ({ hostel }) => {
  return (
    <div>
      <Accordion.Header>{hostel.name}</Accordion.Header>
      <Accordion.Body>
        <p>{hostel.name}</p>
        <p>{hostel.description}</p>
      </Accordion.Body>
    </div>
  );
};
export default HostelItem;