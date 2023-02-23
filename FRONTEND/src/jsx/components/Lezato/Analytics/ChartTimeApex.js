import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartTimeApex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: "New Clients",
					data: [60, 20, 60, 90, 50, 10, 20]
				}
			],
			options: {
				chart: {
					height: 300,
					type: "bar",
					toolbar: {
						show: false,
					},
					sparkline: {
						//enabled: true
					},
					offsetX: -10,
				},
				plotOptions: {
					bar: {
						columnWidth: "28%",
						endingShape: "rounded",
						startingShape: "rounded",
						borderRadius: 2,
						
						colors: {
							
							backgroundBarOpacity: 1,
							backgroundBarRadius: 5,
						},

					},
					distributed: true				
				},
				colors:['var(--primary)'],
				grid: {
					show: true,			
				},
				legend: {
					show: false
				},
				fill: {
				  opacity: 1
				},
				dataLabels: {
					enabled: false,
					colors: ['#000'],
					dropShadow: {
					  enabled: true,
					  top: 1,
					  left: 1,
					  blur: 1,
					  opacity: 1
				  }
				},
				stroke:{
					 show: true,	
					 lineCap: 'butt',
				},
				xaxis: {
					categories: ['04', '05', '06', '07', '8', '9', '10'],
					labels: {
					   style: {
						  colors: '#808080',
						  fontSize: '13px',
						  fontFamily: 'poppins',
						  fontWeight: 100,
						  cssClass: 'apexcharts-xaxis-label',
						},
					},
					crosshairs: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
					axisTicks:{
						 show: false,
					},
						
				},
				yaxis: {
					labels: {
						style: {
							colors: '#808080',
							fontSize: '14px',
							fontFamily: 'Poppins',
							fontWeight: 100,
						  
						},
						formatter: function (y) {
							 return y.toFixed(0) + "";
						}
					},
				},
				tooltip: {
					x: {
						show: true
					}
				},
				responsive: [{
					breakpoint: 375,
					options: {
						xaxis: {
						categories: ['06', '07', '08', '09', '10', '11'],
						},
						chart: {
							height: 250,
						},
						series: [
							 {
								name: "New Clients",
								data: [300, 250, 600, 600, 400, 450],
							}
						],
						
					}
				},
				{
					breakpoint: 575,
					options: {
						chart: {
							height: 250,
						},
						series: [
							 {
								name: "New Clients",
								data: [300, 250, 600, 600, 400, 450, 310, 470, 480],
							}
						],
						xaxis: {
						categories: ['06', '07', '08', '09', '10', '11', '12', '13', '14'],
						}
					}
				}]
			
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
				  height={300}
				/>
			</div>
		);
	}
}

export default ChartTimeApex;