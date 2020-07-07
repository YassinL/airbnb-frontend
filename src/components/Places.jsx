import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../sass/components/_places.scss";

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
    <div className="places">
      {places.map((place, i) => (
        <Fragment>
          <div className="places-onePlace">
            <h2 key={i}>{place.name}</h2>
            <h3>{place["City.name"]}</h3>
            <p dangerouslySetInnerHTML={{ __html: place.description }} />
            <Link to={`/places/${place.id}`}>Regardez cette appart</Link>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
