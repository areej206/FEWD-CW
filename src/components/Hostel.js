import React from "react";
import { useParams } from "react-router-dom";

const Hostel = ({ hostels }) => {
  const { hostelId } = useParams();

  // Filter hostels based on hostelId
  const currentItem = hostels.filter((entry) => {
    return entry.id === hostelId;
  });

  // Destructure name and address from currentItem
  const { name, address } = currentItem.length > 0 ? currentItem[0] : {};

  return (
    <>
      {currentItem.length > 0 ? (
        <>
          <h4>Hostel: {name}</h4>
          <p>{address}</p>
        </>
      ) : (
        <p>Hostel not found</p>
      )}
    </>
  );
};

export default Hostel;














// import React from "react";
// import { useParams } from "react-router-dom";

// const Hostel = ({ hostels }) => {
//   const { hostelId } = useParams();
//   // console.log(hostelId)
//     const currentItem = hostels.filter((entry) => {
//     return entry.id === hostelId;
//   });
//   const { name, address } = currentItem[0];
//   return (
//     <>
//       <h4>Hostel: {name}</h4>
//       <p>{address}</p>
//     </>
//   );
// };
// export default Hostel;



//FIX THIS PAGE IT DOES NOT DISPLAY.
//FILTER IS NOT WORKING











// import React from "react";
// import { useParams } from "react-router-dom";
// import HostelDetails from './HostelDetails'; // Assuming the file is in the same directory

// const Hostel = ({ hostels }) => {
//   const { hostelId } = useParams();
//   const currentItem = hostels.find((entry) => entry.id === hostelId); // Use `find` for a single item

//   return (
//     <>
//       {currentItem ? (
//         <HostelDetails hostel={currentItem} />
//       ) : (
//         <p>Hostel not found.</p>
//       )}
//     </>
//   );
// };

// export default Hostel;
