import React, { useState } from "react";
import axios from "axios";
import airbnbImage from "./image/airbnbImage.png";

export default function AddPlaces() {
  const [inputs, setInputs] = useState({
    idCity: parseInt("1"),
    name: "",
    description: "",
    rooms: parseInt("0"),
    bathrooms: parseInt("0"),
    maxGuests: parseInt("0"),
    priceByNight: parseInt("0"),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("token", token);
    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: "http://localhost:4000/api/places",
      data: inputs,
    });
  };

  return (
    <div className="addPlaces">
      <div className="modal-container">
        <h2 className="modal-container-header">Héberger des voyageurs</h2>
        <form className="modal-container-form" onSubmit={handleSubmit}>
          <label htmlFor="idCity" className="addPlaces-label">
            Villes
            <select
              name="idCity"
              value={inputs.idCity}
              onChange={handleInputChange}
              className="addPlaces-label-select"
            >
              <option value="1">Paris</option>
              <option value="2">Dijon</option>
              <option value="3">Rennes</option>
              <option value="4">Bordeaux</option>
              <option value="5">Marseille</option>
              <option value="6">Montpellier</option>
              <option value="7">Strasbourg</option>
              <option value="8">Lille</option>
              <option value="9">Lyon</option>
              <option value="10">Nice</option>
              <option value="11">Saint-Etienne</option>
              <option value="12">Nantes</option>
              <option value="13">Toulouse</option>
              <option value="14">Brest</option>
              <option value="15">Metz</option>
            </select>
          </label>
          <label htmlFor="name" className="addPlaces-label">
            Nom
            <input
              name="name"
              onChange={handleInputChange}
              value={inputs.name}
              type="text"
              placeholder="Nom"
            />
          </label>
          <label htmlFor="description" className="addPlaces-label">
            Description
            <input
              name="description"
              onChange={handleInputChange}
              value={inputs.descripton}
              type="text"
              placeholder="Description"
            />
          </label>
          <label htmlFor="rooms" className="addPlaces-label">
            Nombre de chambres
            <input
              name="rooms"
              onChange={handleInputChange}
              value={inputs.rooms}
              type="number"
              placeholder="Nombre de Chambres"
            />
          </label>
          <label htmlFor="bathrooms" className="addPlaces-label">
            Salle de bains
            <input
              name="bathrooms"
              onChange={handleInputChange}
              value={inputs.bathrooms}
              type="number"
              placeholder="Salle de bains"
            />
          </label>
          <label htmlFor="maxGuests" className="addPlaces-label">
            Nombre de voyageurs
            <input
              name="maxGuests"
              onChange={handleInputChange}
              value={inputs.maxGuests}
              type="number"
              placeholder="Nombre de Voyageurs"
            />
          </label>
          <label htmlFor="priceByNight" className="addPlaces-label">
            Prix par nuitées
            <input
              name="priceByNight"
              onChange={handleInputChange}
              value={inputs.priceByNight}
              type="number"
              placeholder="Prix par nuitées"
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div>
        <img className="addPlaces-image" src={airbnbImage} alt="" />
      </div>
    </div>
  );
}
