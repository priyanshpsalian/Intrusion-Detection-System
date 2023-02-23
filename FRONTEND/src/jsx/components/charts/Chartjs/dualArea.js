import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "#3b4cb8",
      borderWidth: "1",
      backgroundColor: "rgba(64, 24, 157, .5)",
    },
    {
      label: "My First dataset",
      data: [5, 25, 20, 41, 36, 75, 70],
      borderColor: "rgb(254, 128, 36)",
      borderWidth: "1",
      backgroundColor: "rgba(254, 128, 36, .5)",
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
          padding: 10,
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
class DualArea extends Component {
  render() {
    return (
      <div style={{ height: "150px" }}>
        <Line data={data} options={options} height={150} />
      </div>
    );
  }
}

export default DualArea;
