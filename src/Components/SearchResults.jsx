import React, { useState, useEffect } from "react";
import { CardUi } from "./AlumniCardUi"; // Import the CardUi component
import "./Cardstyle.css";

const SearchResults = () => {
  const [searchData, setsearchData] = useState([]);
  useEffect(() => {
    // Fetch alumni data from PHP script
    fetch("http://localhost/test/search_alumni.php")
      .then((response) => response.json())
      .then((data) => setsearchData(data))
      .catch((error) => console.error("Error fetching searched data:", error));
  }, []);
  console.log(searchData)
  return (
    <>
    <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2">
          {searchData.map((record) => (
            <div key={record.id} className="col-md-6 mb-3">
              <CardUi
                name={record.name}
                present_position={record.present_position}
                organization={record.organization}
                blood_group={record.blood_group}
                email={record.email}
                gender={record.gender}
                present_address={record.present_address}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
