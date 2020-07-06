import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("api/places");
      setPlaces(result.data);
    };

    fetchData();
  }, []);
  console.log("console log de places :", places);
  return (
    <div>
      {places.map((place) => (
        <Fragment>
          <h1 key={place.id}>{place.name}</h1>
          <h2>{place["City.name"]}</h2>
          <p dangerouslySetInnerHTML={{ __html: place.description }} />
          {/* <Link to={`/posts/${post.id}`}>View Book</Link> */}
        </Fragment>
      ))}
    </div>
  );
}
