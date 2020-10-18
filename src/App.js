import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllEpisodes } from "./services";
import { Contador, Loader, Episodio } from "./components";

function App() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    (() => { 
      setTimeout(async () => {
        const data = await getAllEpisodes();
        setEpisodios(data);
      }, 1000);
    })();
  }, []);

  return (
    <div style={{fontSize: 30}}>
      {(episodios.length === 0 ) ? (
        <Loader />
      ) : (
        <>
          <Contador cantidad={episodios.length} />

          {episodios.map(({id,  name, image, summary })=>{
            const { medium } = image;
            return <Episodio 
              id={id} 
              name={name} 
              image={image} 
              summary={summary}
              medium={medium} 
            />
            }
          )}
        </>
      )}
    </div>
  );
}

export default App;
