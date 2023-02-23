import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class HeartRate extends Component {
  render() {
    const data = {
      labels: [ 73, 53,
        50,
        67,
        3,
        56,
        19,
        59,
        37,
        32,
        40,
        26,
        71,
        19,
        4,
        53,
        55,
        31,
        37,
      ],
      datasets: [
        {
          label: "My First dataset",
          data: [
            73,
            53,
            50,
            67,
            3,
            56,
            19,
            59,
            37,
            32,
            40,
            26,
            71,
            19,
            4,
            53,
            55,
            31,
            37,
            67,
            10,
            21,
          ],
          borderColor: "#2258bf",
          borderWidth: "0",
          backgroundColor: "#2258bf",
        },
      ],
    };

    const options = {
      legend: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
              display: false,
              max: 100,
              min: 0,
              stepSize: 7,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: false,
            //   barPercentage: 1.2,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    };

    return (
      <div style={{ height: 100 }}>
        <Bar data={data} height={100} options={options} />
      </div>
    );
  }
}

export default HeartRate;
