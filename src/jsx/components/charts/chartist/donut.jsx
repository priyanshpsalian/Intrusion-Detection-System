import React from "react";
import ChartistGraph from "react-chartist";

function DonutChart() {
   var data = {
      series: [60,40],
      labels: [1,2],
   };

   var options = {
      donut: true,
      showLabel: false,
   };

   var type = "Pie";

   return (
      <>
         <ChartistGraph data={data} options={options} type={type} />
      </>
   );
}

export default DonutChart;
