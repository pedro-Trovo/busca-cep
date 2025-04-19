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
    viacepClient
      .get(`/${termo}/json`)
      .then((result) => {
        if (result.data.erro) {
          alert("CEP não encontrado.");
          return;
        }

        this.setState((prevState) => ({
          ceps: [result.data, ...prevState.ceps],
        }));
      })
      .catch(() => {
        alert("Erro ao buscar o CEP. Tente novamente.");
      });
  };

  render() {
    return (
      <>
        <Busca onBuscaRealizada={this.onBuscaRealizada} />
        <LocalidadeLista ceps={this.state.ceps} />
      </>
    );
  }
}

export default App;
