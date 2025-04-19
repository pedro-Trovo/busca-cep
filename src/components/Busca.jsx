import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Component } from "react";

export default class Busca extends Component {
  state = {
    termoDeBusca: "",
  };

  onTermoAlterado = (event) => {
    this.setState({ termoDeBusca: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { termoDeBusca } = this.state;
    this.props.onBuscaRealizada(termoDeBusca);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="flex flex-column gap-2">
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search"></InputIcon>
            <InputText
              maxLength="8"
              keyfilter="int"
              className="w-full"
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado}
              value={this.state.termoDeBusca}
            />
          </IconField>
          <Button label="OK" outlined />
        </div>
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: "Buscar cep...",
};
