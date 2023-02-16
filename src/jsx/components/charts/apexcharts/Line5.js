import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Recovered Patient",
          data: [500, 230, 600, 360, 700, 890, 750, 420, 600, 300, 420, 220],
        },
        {
          name: "New Patient",
          data: [250, 380, 200, 300, 200, 520, 380, 770, 250, 520, 300, 900],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          group: "social",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [2, 2],
          colors: ["#216fed", "#709fba"],
          curve: "straight",
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
          markers: {
            fillColors: ["#216fed", "#709fba"],
            width: 19,
            height: 19,
            strokeWidth: 0,
            radius: 19,
          },
        },
        markers: {
          size: 6,
          border: 0,
          colors: ["#216fed", "#709fba"],
          hover: {
            size: 6,
          },
        },
        xaxis: {
			categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul",
				"Aug","Sep","Oct","Nov","Dec","10 Jan","11 Jan","12 Jan",
			],
        },
        yaxis: {
          labels: {
            style: {
              colors: "#3e4954",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
          },
        },
        fill: {
          colors: ["#2258bf", "#709fba"],
          type: "solid",
          opacity: 0.07,
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="line-chart-style bar-chart legent-text">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default ApexLine5;
