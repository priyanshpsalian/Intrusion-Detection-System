import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart1 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [25, 20, 50, 41, 55, 45, 70],
          borderColor: "#216fed",
          borderWidth: this.props.borderWidth ? this.props.borderWidth : "2",
          // pointBackgroundColor: "rgba(64, 24, 157, 1)",
          backgroundColor: "rgba(33, 11, 237, 0)",
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
              padding: 0,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              padding: 0,
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
    };
    return (
      <>
        <Line
          data={data}
          options={options}
          height={this.props.height ? this.props.height : 150}
        />
      </>
    );
  }

}

export default LineChart1;
