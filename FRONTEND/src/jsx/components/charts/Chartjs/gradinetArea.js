import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "#216fed",
      borderWidth: "1",
      backgroundColor: "rgba(33, 11, 237, 0.5)",
    },
  ],
};

const options = {
  legend: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 5,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          padding: 5,
        },
      },
    ],
  },
};
class GradientArea extends Component {
  render() {
    return (
      <>
        <Line data={data} options={options} height={150} />
      </>
    );
  }
}

export default GradientArea;
