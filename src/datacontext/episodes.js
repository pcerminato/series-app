import React, { createContext, useState, useEffect } from "react";
import { getAllEpisodes } from "../services";

export const EpisodesContext = createContext();

export const EpisodesContextProvider = ({ children }) => {
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

  const contextValueObject = {
    episodios,
    setEpisodios,
    episodiosAll,
    isModalVisible,
    setIsModalVisible,
    clickedEpisode,
    handleItemClick,
    handleOnChange,
  };

  return (
    <EpisodesContext.Provider value={contextValueObject}>
      {children}
    </EpisodesContext.Provider>
  );
};
