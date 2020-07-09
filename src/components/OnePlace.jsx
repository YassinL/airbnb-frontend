import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function OnePlace() {
  const [OnePlace, setOnePlace] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:4000/api/places/${id}`);
      setOnePlace(result.data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Fragment>
        <h1>{OnePlace.name}</h1>
        <h2>{OnePlace["City.name"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: OnePlace.description }} />
      </Fragment>
    </div>
  );
}
