import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";

const DisplayFoodItems = ({ foodList }) => {
  return (
    <Accordion>
      {foodList.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <FoodItem food={food} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default DisplayFoodItems;

