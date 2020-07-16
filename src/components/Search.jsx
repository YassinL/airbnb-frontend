import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const history = useHistory();
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
    history.push("/places");
  };

  return (
    <div className="searchPhone">
      <form className="searchPhone-form">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="search"
          placeholder="Où allez-vous ?"
          className="searchPhone-form-inputPhone"
        />
        <input
          onClick={callSearchFunction}
          type="submit"
          value="&#10132;"
          className="searchPhone-form-submit"
        />
      </form>

      <form className="search">
        <label htmlFor="" className="search-label">
          Adresse
          <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="search"
            placeholder="Où allez-vous ?"
          />
        </label>

        <label htmlFor="" className="search-label">
          Arrivée
          <input type="date" placeholder="Date d'arrivée" />
        </label>

        <label htmlFor="" className="search-label">
          Départ
          <input type="date" placeholder="Date de départ" />
        </label>

        <label htmlFor="" className="search-label">
          Voyageurs
          <input type="number" placeholder="Ajoutez des voyageurs" />
        </label>

        <input
          onClick={callSearchFunction}
          type="submit"
          value="Rechercher"
          className="search-submit"
        />
      </form>
    </div>
  );
};

export default Search;
