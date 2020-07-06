import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/api/places");
      setPlaces(result.data);
    };

    fetchData();
  }, []);
  console.log("console log de places :", places);
  return (
    <div>
      <h1>je suis les places</h1>
      {/* {places.map(place => (

      ))} */}
    </div>
  );
}
