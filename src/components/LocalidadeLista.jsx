import React from "react";
import { Card } from "primereact/card";

export default function LocalidadeLista({ ceps }) {
  if (!ceps || ceps.length === 0) return null;
  return (
    <div className="flex flex-column gap-2 mt-2 align-items-start">
      {ceps.map((loc, index) => (
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
