import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "../sass/components/_header.scss";
import Search from "./Search";

export default function Nav() {
  const [state, setState] = useState(false);
  const [places, setPlaces] = useState([]);

  const search = (searchValue) => {
    const fetchData = async () => {
      console.log(window.location);
      const result = await axios(
        `http://localhost:4000/api/places?city=${searchValue}`
      );
      setPlaces(result.data);
      setState(true);
      console.log("console log de cities", result.data);
    };

    fetchData();
  };
  console.log("console log de location", search);
  console.log("console log de Places", places);
  console.log("console log de places.name", places.name);
  console.log("console log de places.City.name", places["City.name"]);
  return (
    <Fragment>
      <div>
        {places.map((place, i) => (
          <h2>{place.name}</h2>
        ))}
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="link" to="/places">
                Appartements
              </Link>
            </li>
            <li>
              <Link className="link" to="/signup">
                Inscription
              </Link>
            </li>
            <li>
              <Link className="link signin" to="/signin">
                Connexion
              </Link>
            </li>
           
          </ul>
          <div className='recherche'>
          <Search search={search} />
              {state ? (
                <Redirect
                  to={{
                    pathname: `/places?city=${places.name}`,
                    state: { places },
                  }}
                />
              ) : (
                <></>
              )}
          </div>
            
        </nav>
      </div>
    </Fragment>
  );
}
