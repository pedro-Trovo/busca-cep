import React, { Component } from "react";
import { Chart } from "primereact/chart";

export default class Grafico extends Component {
  render() {
    this.chartData = {
      labels: Object.keys(this.props.graficoEstados),
      datasets: [
        {
          data: Object.values(this.props.graficoEstados),
        },
      ],
    };

    return <Chart type="pie" data={this.chartData} />;
  }
}
