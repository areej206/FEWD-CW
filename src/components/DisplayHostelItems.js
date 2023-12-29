import React from "react";
import Accordion from "react-bootstrap/Accordion";
import HostelItem from "./HostelItem";

const DisplayHostelItems = ({ hostelList }) => {
  return (
    <Accordion>
      {hostelList.map((hostel, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <HostelItem hostel={hostel} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default DisplayHostelItems;
