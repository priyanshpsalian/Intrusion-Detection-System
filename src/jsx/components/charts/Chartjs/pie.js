import React from "react";
import { Pie } from "react-chartjs-2";

const ChartPie = ({ color1, color2, color3, color4, height, width }) => {
   const data = {
      datasets: [
         {
            data: [45, 25, 20, 10],
            borderWidth: 0,
            backgroundColor: [
               `${color1 ? color1 : "rgba(33, 11, 237, 1)"}`,
               `${color2 ? color2 : "rgba(33, 11, 237, 0.7)"}`,
               `${color3 ? color3 : "rgba(33, 11, 237, 0.5)"}`,
               `${color4 ? color4 : "rgba(0, 0, 0, 0.07)"}`,
            ],
            hoverBackgroundColor: [
               `${color1 ? color1 : "rgba(33, 11, 237, 1)"}"}`,
               `${color2 ? color2 : "rgba(33, 11, 237, 0.7)"}`,
               `${color3 ? color3 : "rgba(33, 11, 237, 0.5)"}`,
               `${color4 ? color4 : "rgba(0, 0, 0, 0.07)"}`,
            ],
         },
      ],
      labels: ["one", "two", "three"],
   };

   const options = {
      responsive: true	,
      legend: false,
      maintainAspectRatio: false,
   };

   return (
      <>
         <Pie data={data} height={height ? height : 200} options={options} />
      </>
   );
};

export default ChartPie;
