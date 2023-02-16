import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexRedialBar2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [71, 63, 90],
      options: {
        chart: {
          type: "radialBar",
          //width:320,
          // height: 370,
          offsetY: 0,
          offsetX: 0,
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: false,
            hollow: {
              margin: 0,
              size: "30%",
              background: "transparent",
            },

            track: {
              show: true,
              background: "#216fed",
              strokeWidth: "10%",
              opacity: 1,
              margin: 18, // margin is in pixels
            },
          },
        },
        responsive: [
          {
            breakpoint: 830,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "20%",
                  },
                },
              },
            },
          },
          {
            breakpoint: 800,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "10%",
                  },
                },
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "30%",
                  },
                },
              },
            },
          },
          {
            breakpoint: 330,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "20%",
                  },
                },
              },
            },
          },
        ],

        fill: {
          opacity: 1,
        },

        colors: ["#216fed", "#216fed", "#216fed"],
        labels: ["Ticket A", "Ticket B", "Ticket C"],
        legend: {
          fontSize: "14px",
          show: true,
          position: "bottom",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="legent-text">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={this.props.height ? this.props.height : 370}
        />
      </div>
    );
  }
}
export default ApexRedialBar2;
