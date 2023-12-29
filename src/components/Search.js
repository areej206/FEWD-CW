import React, { useState } from "react";
import HostelSearchItems from "./HostelSearchItems";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  
  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase());
  });

  // const cafeList = filtered.filter((entry) => {
  //   return entry.cafe === true; // Ensure cafe property is correctly checked
  // });

  return (	
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <HostelSearchItems hostelList={filtered} />
      </div>
  
  );
}
export default Search;