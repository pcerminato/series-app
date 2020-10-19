import React from "react";
import ReactHtmlParser from "react-html-parser";
import { EpisodeEl } from "./styled";

export default ({ id, medium, name, summary, onClick }) => {
  return (
    <EpisodeEl key={id} onClick={onClick}>
      <img src={medium} alt={name} />
      <h3>{name}</h3>
      {ReactHtmlParser(summary)}
    </EpisodeEl>
  );
};
