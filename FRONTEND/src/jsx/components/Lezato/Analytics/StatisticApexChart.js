import React from "react";
import ReactApexChart from "react-apexcharts";

class StatisticApexChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [{
				name: 'Beverages   <span class="value">569</span>',
				data: [30, 20, 30, 20, 20]
			}, {
				name: 'Food  <span class="value"> 1,567</span>',
				data: [40, 25, 40, 30, 25]
			}],
			options: {
				chart: {
					height: 360,
					type: "bar",
					toolbar: {
						show: false,
					},
					
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '55%',
						endingShape: 'rounded',
						startingShape: "rounded",
						borderRadius: 7,
					},		
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					show: true,
					width: 0,
					colors: ['transparent'],
					lineCap: 'smooth',
				},
				xaxis: {
					categories: ['Week 01', 'Week 02', 'Week 03', 'Week 04', 'Week 05'],
					labels: {
						show: true,
						style:{
							fontSize:"14px",
							fontWeight:500,
							colors:"#787878",
						}
				   },
					axisBorder:{
						show: false,	
					},
					axisTicks: {
						show: false,
					},
				},
				yaxis: {
					show: true	,
					labels: {
					show: true,
						style:{
							fontSize:"14px",
							fontWeight:500,
							colors:"#787878",
						}
					},
				},
				grid: {	
					show: false
				},
				legend:{
					position: 'top',
					horizontalAlign: 'left', 
					fontWeight: 300,
					fontSize:'16px',
					fontFamily:'poppins',
					colors:['#202020'],
					markers:{
						radius: 12,
					},
				},
				fill: {
				  opacity: 1
				},
				colors: ['#624FD1', 'var(--primary)'],
				tooltip: {
				  y: {
					formatter: function (val) {
					  return "$ " + val + " thousands"
					}
				  }
				}
			
			},
		};
	}

	render() {
		return (
			<div id="chart" >
				<ReactApexChart
				  options={this.state.options}
				  series={this.state.series}
				  type="bar"
				  height={360}
				/>
			</div>
		);
	}
}

export default StatisticApexChart;