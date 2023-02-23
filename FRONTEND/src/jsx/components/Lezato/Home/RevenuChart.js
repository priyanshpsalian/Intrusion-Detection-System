import React from "react";
import ReactApexChart from "react-apexcharts";

class RevenuChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [{
				name: 'Net Profit',
				data: [20, 30, 20, 30, 20, 30, 20,30],
					//radius: 12,	
			},],
			options: {
				chart: {
					height: 230,
					type: "area",
					toolbar: {
						show: false,
					},
				},
				plotOptions: {
				  bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded'
				  },
				},
				colors:['var(--primary)'],
				dataLabels: {
					enabled: false
				},
				markers: {
					shape: "circle",
				},

				legend: {
					show: false,
				},
				
				
				
				stroke: {
				  show: true,
				  width: 4,
				  curve:'smooth',
				  colors:['var(--primary)'],
				},
				
				grid: {
					borderColor: '#eee',
					xaxis: {
						lines: {
							show: true
						}
					},   
					yaxis: {
						lines: {
							show: false
						}
					},  
				},				
				xaxis: {
					categories: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
					labels: {
						style: {
							colors: '#7E7F80',
							fontSize: '13px',
							fontFamily: 'Poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
						},
					},
					crosshairs: {
						show: false,
					}
				},
				yaxis: {
				show:true,	
				labels: {
					offsetX: -15,
					style: {
						colors: '#7E7F80',
						fontSize: '14px',
						fontFamily: 'Poppins',
						fontWeight: 100,
					  
					},
					formatter: function (y) {
					  return y.toFixed(0) + "";
					}
				  },
				},
				fill: {
					type:"solid",
				  opacity: 1,
				  colors:'var(--primary)'
				},
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
			<div id="chart">
				<ReactApexChart
				  options={this.state.options}
				  series={this.state.series}
				  type="area"
				  height={230}
				/>
			</div>
		);
	}
}

export default RevenuChart;