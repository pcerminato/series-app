import React from "react";

export default ({ name, airdate, airtime, number, season, image }) => {
  return (
    <div>
      <img width="800" src={image.original} alt={name} />
      <p>{name}</p>
      <p>{airdate}</p>
    </div>
  );
};
