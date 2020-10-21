import React, { useContext } from "react";
import {
  Contador,
  Loader,
  EpisodesList,
  NavBar,
  SearchBox,
  Modal,
  EpisodioDetalle,
} from "../components";
import { EpisodesContext } from "../datacontext/episodes";
import { Link } from "@reach/router";

export default () => {
  const {
    handleOnChange,
    episodios,
    handleItemClick,
    isModalVisible,
    clickedEpisode,
    toggleModal,
  } = useContext(EpisodesContext);

  return (
    <>
      <div style={{ fontSize: 30 }}>
        <NavBar>
          <SearchBox onChange={handleOnChange} />
          <ul class="nav-els">
            <li>
              <Contador cantidad={episodios.length} />
            </li>
            <li>
              <Link to="/config">Config</Link>
            </li>
          </ul>
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
};
