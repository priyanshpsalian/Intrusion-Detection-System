import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { useState } from "react";


// const [d, setD] = useState("data");
  var data =[{
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

// console.log("Hello");
// console.log(data[0].name);

export default class NagetivePositive extends PureComponent {
  

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={4.0 / 2.0}>
        <BarChart
          data={data}
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
    );
  }
}
