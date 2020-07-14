import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import appart from "./image/appart.jpg";

export default function OnePlace() {
  const [OnePlace, setOnePlace] = useState([]);
  const [city, setCity] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:4000/api/places/${id}`);
      setOnePlace(result.data);
      setCity(result.data.City.name);
    };

    fetchData();
  }, [id]);
  console.log(OnePlace);
  return (
    <div>
      <Fragment>
        <img src={appart} alt="appartImage" className="imgAppart" />
        <h1>{OnePlace.name}</h1>
        <h3>{city}</h3>
        <p className="places-onePlace-infos-description">
          {OnePlace.description}
        </p>
        <p>
          {OnePlace.maxGuests} voyageurs - {OnePlace.rooms} chambres -{" "}
          {OnePlace.bathrooms} salle de bain{" "}
        </p>
        {/* <p className="places-onePlace-infos-description">
          {" "}
          {OnePlace.description.substr(0, 1).toUpperCase() +
            OnePlace.description
              .substr(1, OnePlace.description.length)
              .toLowerCase()}{" "}
        </p> */}
      </Fragment>
    </div>
  );
}
