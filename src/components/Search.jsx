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
    history.push('/places')
  };


  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        className="input1"
        placeholder="Où allez-vous ?"
      />
      <input
        onClick={callSearchFunction}
        type="submit"
        value="Rechercher"
        className="input2"
      />
    </form>
  );
};

export default Search;
