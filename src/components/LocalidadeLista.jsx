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
    <div className="flex flex-column gap-2 mt-2 align-items-start">
      {localidadesFicticias.map((loc, index) => (
        <Card
          key={index}
          className="w-20rem border-2 border-round-xl border-900 text-center p-2"
        >
          <div>{loc.cep}</div>
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
