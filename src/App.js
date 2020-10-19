import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllEpisodes } from "./services";
import { Contador, Loader, EpisodesList } from "./components";

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
          <EpisodesList episodios={episodios} />
        </>
      )}
    </div>
  );
}

export default App;
