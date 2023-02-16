import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: [
    ["Eating", "Dinner"],
    ["Drinking", "Water"],
    "Sleeping",
    ["Designing", "Graphics"],
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 66, 45, 56, 55, 40],
      borderColor: "#e6459f",
      borderWidth: "1",
      backgroundColor: "rgba(38, 88, 191, .6)",
    },
    {
      label: "My Second dataset",
      data: [28, 12, 40, 19, 63, 27, 87],
      borderColor: "#3b4cb8",
      borderWidth: "1",
      backgroundColor: "rgba(68, 236, 245, .5)",
    },
  ],
};

const options = {
  legend: false,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      beginAtZero: true,
    },
  },
};
class RadarChart extends Component {
  render() {
    return (
      <>
        <Radar data={data} options={options} height={150} />
      </>
    );
  }
}

export default RadarChart;
