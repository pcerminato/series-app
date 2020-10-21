import React from "react";
import { Router } from "@reach/router";
import { EpisodesScreen } from "./screens";
import { EpisodesContextProvider } from "./datacontext/episodes";

function App() {
  return (
    <EpisodesContextProvider>
      <Router>
        <EpisodesScreen path="/" />
      </Router>
    </EpisodesContextProvider>
  );
}

export default App;
