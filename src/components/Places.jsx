import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ContextRecherche from "./Context/Context";
import appart from "./image/appart.jpg";
import GoogleMap from "./GoogleMap";

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
              <h3>
                {" "}
                {place.name.substr(0, 1).toUpperCase() +
                  place.name.substr(1, place.name.length).toLowerCase()}{" "}
              </h3>
            </Link>
            <h3> {place["City.name"]} </h3>
            <p>
              {place.maxGuests} voyageurs - {place.rooms} chambres -{" "}
              {place.bathrooms} salle de bain{" "}
            </p>
            <p className="places-onePlace-infos-prix">
              <b>{place.priceByNight}€</b> / nuits
            </p>
          </div>
        </div>
      ))}{" "}
      <GoogleMap />
    </div>
  );
}
