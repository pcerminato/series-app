import React, { useState, useEffect } from "react";
import { getAllEpisodes } from "./services";
import {
  Contador,
  Loader,
  EpisodesList,
  NavBar,
  SearchBox,
  Modal,
  EpisodioDetalle,
} from "./components";

function App() {
  const [episodios, setEpisodios] = useState([]);
  const [episodiosAll, setEpisodiosAll] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clickedEpisode, setClickedEpisode] = useState({});

  useEffect(() => {
    (() => {
      setTimeout(async () => {
        const data = await getAllEpisodes();
        setEpisodios(data);
        setEpisodiosAll(data);
      }, 1000);
    })();
  }, []);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const handleItemClick = (episode) => {
    toggleModal();
    setClickedEpisode(episode);
  };

  const handleOnChange = (event) => {
    const value = event.target.value.toLowerCase();

    if (value.trim() === "") {
      setEpisodios(episodiosAll);
      return;
    }

    const filtered = episodiosAll.filter(({ name }) => {
      return name.toLowerCase().includes(value);
    });

    setEpisodios(filtered);
  };

  return (
    <>
      <div style={{ fontSize: 30 }}>
        <NavBar>
          <SearchBox onChange={handleOnChange} />
          <Contador cantidad={episodios.length} />
        </NavBar>
        <div style={{ marginTop: 100 }}>
          {episodios.length === 0 ? (
            <Loader />
          ) : (
            <EpisodesList episodios={episodios} onItemClick={handleItemClick} />
          )}
        </div>
      </div>
      {isModalVisible ? (
        <Modal>
          <>
            <EpisodioDetalle {...clickedEpisode} />
            <button onClick={toggleModal}>Cerrar</button>
          </>
        </Modal>
      ) : null}
    </>
  );
}

export default App;
