import React from "react";
import Episodio from "../Episodio";

export default ({episodios})=>
  episodios.map(({id,  name, image, summary })=>{
    const { medium } = image;
    return <Episodio 
      id={id} 
      name={name} 
      image={image} 
      summary={summary}
      medium={medium} 
    />
    }
  )
