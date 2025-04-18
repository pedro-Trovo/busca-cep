import Busca from "./Busca";
import React from "react";
import LocalidadeLista from "./LocalidadeLista";

class App extends React.Component {
  render() {
    return (
      <>
        <Busca />
        <LocalidadeLista />
      </>
    );
  }
}

export default App;
