import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import PageTitle from "../../../layouts/PageTitle";
import ApexLine3 from "../apexcharts/Line3";
import ApexRedialBar from "../apexcharts/RadialBar";
import ApexPie5 from "../apexcharts/Pie5";
import DonutChart from "../chartist/donut";
import BarChartNoPadding from "./BarChartNoPadding";
import NagetivePositive from "./PositiveNagative2";
import TinyLineChart from "./TinyLineChart";
import LegendEffectOpacity from "./LegendEffectOpacity";
// import { sensor } from "../../../../services/AuthService";
import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { sensor } from "../../../../services/AuthService";

function RechartJs() {
  const [data, setData] = useState({
    us1: [330, 300, 120, 310, 225, 220, 375, 220, 100, 330],
    us2: [220, 375, 220, 100, 330, 220, 375, 220, 100, 330],
    infra:0
  });
  // const fetchData = () => {
  //     return axios.get("https://home-sec.onrender.com/api")
  //           .then((response) => {
  //             console.log(response.data)
  //           setData(response.data)
  //         });
  //   }
  const fetcehData = async () => {
    const da = await sensor();
    console.log(da, "da");
    setData({
      us1: [
        data.us1[1],
        data.us1[2],
        data.us1[3],
        data.us1[4],
        data.us1[5],
        data.us1[6],
        data.us1[7],
        data.us1[8],
        data.us1[9],
        da.us1,
      ],
      us2: [
        data.us2[1],
        data.us2[2],
        data.us2[3],
        data.us2[4],
        data.us2[5],
        data.us2[6],
        data.us2[7],
        data.us2[8],
        data.us2[9],
        da.us2,
      ],
      infra:data.infra
    });
    console.log(data);
  };
  //  useState

  useEffect(() => {
    // while (true) {
      const timer = setTimeout(() => {
        fetcehData();
        console.log("This will run after 1 second!");
      }, 1000);
    // }

    // return () => clearTimeout(timer);

    // const da=sensor();
    // console.log(da,"da");
    // fetchData();
  },[]);
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: [4],
      colors: ["#216fed"],
      curve: "straight",
    },

    xaxis: {
      type: "text",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    colors: ["#216fed"],
    markers: {
      size: [6],
      strokeWidth: [4],
      strokeColors: ["#216fed"],
      border: 0,
      colors: ["#fff"],
      hover: {
        size: 10,
      },
    },
    yaxis: {
      title: {
        text: "",
      },
    },
  };
const series1=[
        {
          name: "Running",
          // data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110,20],
          data:data.us1,
          
        },
      ];
      const series2 = [
        {
          name: "Running",
          // data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110,20],
          data: data.us2,
        },
      ];
      let x = 81+(Math.random() * 100)%40/20;
      // console.log(81+x);
      let n = x.toPrecision(4);
      var series_humidity= [n];

      const options_humidity= {
        chart: {
          height: 300,
          type: "radialBar",
          offsetY: -10,
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 120,
              },
              value: {
                offsetY: 0,
                fontSize: "34px",
                color: "#216fed",
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
        fill: {
          type: "gradient",
          colors: "#216fed",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
          },
        },
        stroke: {
          dashArray: 4,
          colors: "#216fed",
        },
        labels: [""],
      };
      let x2 = 26 + ((Math.random() * 100) % 40) / 30;
      // console.log(81+x);
      let n2 = x2.toPrecision(4);
      const series_temp= [n2];
      const options_temp= {
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
              size: "50%",
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

        colors: ["#216fed"],
        labels: ["Temperature"],
        legend: {
          fontSize: "14px",
          show: true,
          position: "bottom",
        },
      };
      var data_infrared = [
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: -1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: -2400,
          amt: 2500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  // useEffect(()=>{
  //   // const data = fetchUser();
  //   console.log(fetch("https://home-sec.onrender.com/api"));
  // }, [])

  // const fetchUser = async () => {
  //   try {
  //   const response = await fetch("https://home-sec.onrender.com/api")
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  //   const data = await response.json();
  //   console.log(data);

  // }

  // useEffect(() => {
  //   const data = fetchUser();
  //   console.log(data);
  // })
  //  const fetchTasks = async () => {
  //   const res = await fetch('https://home-sec.onrender.com/api')
  //    const data = res.json();
  //    console.log("data00", data);
  //   return data
  // }

  return (
    <>
      <PageTitle motherMenu="Charts" activeMenu="ReChartJs" />
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Ultrasonic Sensor 1</h4>
            </Card.Header>
            <Card.Body>
              <div id="chart" className="bar-chart">
                <ReactApexChart
                  options={options}
                  series={series1}
                  type="area"
                  height={350}
                />
              </div>
              {/* <ApexLine3 gg="ll" data={data.us1} /> */}
            </Card.Body>
          </Card>

          {/* <Card>
            <Card.Header>
				<h4 className="card-title">Bar</h4>
            </Card.Header>

            <Card.Body>
              <BarChartNoPadding />
            </Card.Body>
          </Card> */}
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Ultrasonic Sensor 2</h4>
            </Card.Header>
            <Card.Body>
              <ReactApexChart
                options={options}
                series={series2}
                type="area"
                height={350}
              />
              {/* <ApexLine3 /> */}
            </Card.Body>
          </Card>
          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Bar</h4>
            </Card.Header>
            <Card.Body>
              <NagetivePositive />
            </Card.Body>
          </Card> */}
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Humidity</h4>
            </Card.Header>
            <Card.Body>
              <div id="chart">
                <ReactApexChart
                  options={options_humidity}
                  series={series_humidity}
                  type="radialBar"
                  height={350}
                />
              </div>
              {/* <ApexRedialBar /> */}
            </Card.Body>
          </Card>

          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <TinyLineChart />
            </Card.Body>
          </Card> */}
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Pie</h4>
            </Card.Header>
            <Card.Body>
              <div id="chart" className="legent-text">
                <ReactApexChart
                  options={options_temp}
                  series={series_temp}
                  type="radialBar"
                  height="370"
                />
              </div>
              {/* <ApexPie5 /> */}
            </Card.Body>
          </Card>
          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <LegendEffectOpacity />
            </Card.Body>
          </Card> */}
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bar</h4>
            </Card.Header>
            <Card.Body>
              <ResponsiveContainer width="100%" aspect={4.0 / 2.0}>
                <BarChart
                  data={data_infrared}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  {/* <Bar dataKey="pv" fill="#709fba" /> */}

                  {/* console.log(data.name, data.uv, data.pv, data.amt); */}
                  <Bar dataKey="uv" fill="#ff5c00" />
                  <Bar dataKey="amt" fill="#216fed" />
                </BarChart>
              </ResponsiveContainer>
              {/* <NagetivePositive /> */}
            </Card.Body>
          </Card>
          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <LegendEffectOpacity />
            </Card.Body>
          </Card> */}
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Donut</h4>
            </Card.Header>
            <Card.Body>
              <DonutChart />
            </Card.Body>
          </Card>

          {/* <Card>
       <Card.Header>
         <h4 className="card-title">Line</h4>
       </Card.Header>
       <Card.Body>
         <LegendEffectOpacity />
       </Card.Body>
     </Card> */}
        </Col>
      </Row>
    </>
  );
}

export default RechartJs;
