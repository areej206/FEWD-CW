import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SubNav from "./SubNav";

const Hostels = ({ hostels }) => {
  const location = useLocation();

  // Check if the current route is '/hostels'
  const isHostelsRoute = location.pathname === "/hostels";

  return (
    <div className="container-fluid">
      <SubNav />

      {isHostelsRoute && (
        <>
          <h2>Hostels</h2>
          <p>Visit our most incredible hostels</p>

          <ul className="list-group">
            {hostels.map((hostel) => (
              <li className="list-group-item" key={hostel.id}>
                <Link to={hostel.id}>{hostel.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      
      <Outlet />
    </div>
  );
};

export default Hostels;
