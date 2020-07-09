import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../sass/components/_places.scss";
import airbnbImage from "./image/airbnb.png";

export default function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/api/places");
      setPlaces(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="places">
      {places.map((place, i) => (
        <div className="places-onePlace">
          <img src={airbnbImage} alt="airbnbImage" />
          <div className="places-onePlace-infos">
            <Link to={`/places/${place.id}`}>
              <h2 key={i}>{place.name}</h2>
            </Link>
            <h3>{place["City.name"]}</h3>
            <h4 className="places-onePlace-infos-description">
              {place.description}
            </h4>
            <p>- Chambres : {place.rooms}</p>
            <p>- Salle de bains : {place.bathrooms}</p>
            <p>- Maximum de personnes : {place.maxGuests}</p>
            <p>- Prix /nuits : {place.priceByNight}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
