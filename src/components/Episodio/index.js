import React from "react";
import ReactHtmlParser from "react-html-parser";
import { EpisodeEl } from "./styled";

export default ({ id, medium, name, summary }) => {
  return (
    <EpisodeEl key={id}>
      <img src={medium} alt={name} />
      <h3>{name}</h3>
      {ReactHtmlParser(summary)}
    </EpisodeEl>
  );
};
