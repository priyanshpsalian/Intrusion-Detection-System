import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-streaming";
var createReactClass = require("create-react-class");

const data = {
	labels: ["0", "1", "2", "3", "4", "5", "6", "0", "1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "My First dataset",
		backgroundColor: "rgba(58,223,174,1)",
		strokeColor: "rgba(58,223,174,1)",
		pointColor: "rgba(0,0,0,0)",
		pointStrokeColor: "rgba(58,223,174,1)",
		pointHighlightFill: "rgba(58,223,174,1)",
		pointHighlightStroke: "rgba(58,223,174,1)",
		data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        display: false,
      },
    ],
    xAxes: [
      {
        display: false,
        type: "realtime",
        realtime: {
          onRefresh: function () {
            data.datasets[0].data.push({
              x: Date.now(),
              y: Math.random() * 100,
            });
          },
          delay: 1000,
        },
      },
    ],
  },
  title: {
    display: false,
  },
  plugins: {
    streaming: {
      // per-chart option
      frameRate: 0, // chart is drawn 30 times every second
    },
  },
};

export default createReactClass({
  displayName: "ActiveUser",
  render() {
    return (
      <div>
        <Bar data={data} options={options} height={150} />
      </div>
    );
  },
});
