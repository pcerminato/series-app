import React from "react";
import {
  Contador,
  Loader,
  EpisodesList,
  NavBar,
  SearchBox,
  Modal,
  EpisodioDetalle,
} from "./components";

export default () => {
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
};
