import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../sass/components/_places.scss";
import ContextRecherche from "./Context";
import appart from "./image/appart.jpg";

export default function Places() {
  const [places, setPlaces] = useState([]);
  const context = useContext(ContextRecherche);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:4000/api/places?city=${context.recherche}`
      );
      setPlaces(result.data);
    };

    fetchData();
  }, [context.recherche]);

  return (
    <div className="places">
      {" "}
      {places.map((place, i) => (
        <div key={i} className="places-onePlace">
          <img src={appart} alt="appartImage" className="imgAppart" />

          <div className="places-onePlace-infos">
            <Link to={`/places/${place.id}`} className="name">
              <h2>
                {" "}
                {place.name.substr(0, 1).toUpperCase() +
                  place.name.substr(1, place.name.length).toLowerCase()}{" "}
              </h2>
            </Link>
            <h3> {place["City.name"]} </h3>
            <h4 className="places-onePlace-infos-description">
              {" "}
              {place.description.substr(0, 1).toUpperCase() +
                place.description
                  .substr(1, place.description.length)
                  .toLowerCase()}{" "}
            </h4>
            <p>- Chambres: {place.rooms}</p>
            <p>- Salle de bains: {place.bathrooms}</p>
            <p>- Maximum de personnes: {place.maxGuests}</p>
            <p className="paraBottom">
              - <b>{place.priceByNight}€</b> / nuits
            </p>
          </div>
        </div>
      ))}{" "}
    </div>
  );
}
