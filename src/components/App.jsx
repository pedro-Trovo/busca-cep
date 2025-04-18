import Busca from "./Busca";
import React from "react";
import viacepClient from "../utils/viacepClient";
import LocalidadeLista from "./LocalidadeLista";

class App extends React.Component {
  viacepClient = null;

  state = {
    ceps: [],
  };

  onBuscaRealizada = (termo) => {
    viacepClient.get(`/${termo}/json`).then((result) => {
      this.setState((prevState) => ({
        ceps: [result.data, ...prevState.ceps],
      })),
        console.log(result.data);
    });
  };

  render() {
    return (
      <>
        <Busca onBuscaRealizada={this.onBuscaRealizada} />
        <LocalidadeLista ceps={this.state.ceps}/>
      </>
    );
  }
}

export default App;
