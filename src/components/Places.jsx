import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      {places.map((place, i) => (
        <Fragment>
          <h1 key={i}>{place.name}</h1>
          <h2>{place["City.name"]}</h2>
          <p dangerouslySetInnerHTML={{ __html: place.description }} />
          <Link to={`/places/${place.id}`}>Regardez cette appart</Link>
        </Fragment>
      ))}
    </div>
  );
}
