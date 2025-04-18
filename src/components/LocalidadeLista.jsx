import React from "react";
import { Card } from "primereact/card";

const localidadesFicticias = [
  {
    cep: "04094-050",
    logradouro: "Avenida Pedro Álvares Cabral",
    bairro: "Parque Ibirapuera",
    localidade: "São Paulo",
    uf: "SP",
  },
  {
    cep: "55592-970",
    logradouro: "Rua dos Navegantes",
    bairro: "Vila de Porto de Galinhas",
    localidade: "Ipojuca",
    uf: "PE",
  },
];

export default function LocalidadeLista() {
  return (
    <div className="flex flex-column">
      {localidadesFicticias.map((loc, index) => (
        <Card
          key={index}
          className="card"
          style={{
            marginTop : "0.5rem",
            border: "solid black",
            borderRadius: "1rem",
            textAlign: "center",
            fontSize: "1rem",
            lineHeight: "1.8rem",
            padding: "1.5rem",
            marginBottom : "0.5rem",
            width : "30.5rem",
          }}
        >
          <div >{loc.cep}</div>
          <div>{loc.logradouro}</div>
          <div>{loc.bairro}</div>
          <div>
            {loc.localidade} - {loc.uf}
          </div>
        </Card>
      ))}
    </div>
  );
}
