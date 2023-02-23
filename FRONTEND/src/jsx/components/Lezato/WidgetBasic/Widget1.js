import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Widget1 extends Component {
  render() {
    const data = {
      labels: [7, 6, 8, 7, 3, 8, 3, 3, 0],
      datasets: [
        {
          label: "My First dataset",
          data: [0, 5, 4, 5, 4, 5, 4, 5, 4],
          backgroundColor: "#d9c6e9",
          borderColor: "#b58ed3",
          borderWidth: 2,
          strokeColor: "#b58ed3",
          capBezierPoints: !0,
          pointColor: "#fff",
          pointBorderColor: "#b58ed3",
          pointBackgroundColor: "#b58ed3",
          pointBorderWidth: 2.5,
          pointRadius: 1.5,
          pointHoverBackgroundColor: "#b58ed3",
          pointHoverBorderColor: "#b58ed3",
          pointHoverRadius: 0,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: false,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Value",
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0,
        },
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      title: {
        display: false,
      },
    };
    return (
      <div style={{ height: 150 }}>
        <Line data={data} options={options} height={150} />
      </div>
    );
  }
}

export default Widget1;
