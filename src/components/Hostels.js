import React from "react";
import { Link, Outlet } from "react-router-dom";

const Hostels = ({ hostels }) => {
  return (
    <div className="container-fluid">
      <h2>Hostels</h2>
      <p>Vist our most incredible hostels</p>
      <ul className="list-group">
        {hostels.map((hostel) => (
          <li className="list-group-item" key={hostel.id}>
            <Link to={hostel.id}>{hostel.name}</Link>
           
          </li>
        ))}
      </ul>
      <Outlet />
      {/* <br />
      <br />
      <br />

      <h2>Search Facilities</h2>
      <p>Unsure if the hostel of your choice has a cafe? Check now!</p>
 */}
    </div>
  );
};

export default Hostels;
