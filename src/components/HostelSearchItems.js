import React from "react";
import Accordion from "react-bootstrap/Accordion";
import SearchItems from "./SearchItems";

const HostelSearchItems = ({ hostelList }) => {
  return (
    <Accordion>
      {hostelList.map((hostel, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <SearchItems hostel={hostel} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default HostelSearchItems;
















// import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import HostelItem from "./HostelItem";
// import DisplayMenuCategory from "./DisplayMenuCategory";

// const DisplayHostelItems = ({ hostelList }) => {
//   const cafe = hostelList.filter((entry) => entry.cafe === "true");  
//   const noCafe = hostelList.filter((entry) => entry.cafe === "false");  
 
//   const categories = [cafe,noCafe];

//   return (
//     <>
//     {categories.map((hostel) => (
//       <div>
//         <hr/>
//       <DisplayMenuCategory hostelList={hostel} />
//       </div>
//     ))}
//   </>
//   );
// };
// export default DisplayHostelItems;

