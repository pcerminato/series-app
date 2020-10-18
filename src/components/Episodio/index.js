import React from "react";
import ReactHtmlParser from 'react-html-parser';

export default ({id, medium, name, summary}) => {
  return <div className='episodio' key={id}>
    <img src={medium} />
    <h3>{name}</h3>
    {ReactHtmlParser(summary)}
  </div>;
}