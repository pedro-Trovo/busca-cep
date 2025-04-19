import Busca from "./Busca";
import React from "react";
import viacepClient from "../utils/viacepClient";
import LocalidadeLista from "./LocalidadeLista";
import Grafico from "./Grafico";

class App extends React.Component {
  viacepClient = null;

  state = {
    ceps: [],
    graficoEstados: [],
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
          graficoEstados: {
            ...prevState.graficoEstados,
            [result.data.estado]:
              (prevState.graficoEstados[result.data.estado] || 0) + 1,
          },
        }));
      })
      .catch(() => {
        alert("Erro ao buscar o CEP. Tente novamente.");
      });
  };

  render() {
    return (
      <div className="flex mt-8	justify-content-center gap-6">
        <div className="col-3 flex flex-column gap-4">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
          <LocalidadeLista ceps={this.state.ceps} />
        </div>
        <div className="col-3 mt-8">
          <Grafico graficoEstados={this.state.graficoEstados} />
        </div>
      </div>
    );
  }
}

export default App;
