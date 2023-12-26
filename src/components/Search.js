import React, { useState } from "react";
import DisplayHostelItems from "./DisplayHostelItems";

function Search({ details }) {
   const [searchField, setSearchField] = useState("");

   const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase());
  });

  // const cafeList = filtered.filter((entry) => {
  //   return entry.cafe==="true";
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
          <DisplayHostelItems hostelList={filtered} />
      </div>
  
  );
}
export default Search;
