import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [85, 60, 67],
			options: {
				chart: {
					height: 350,
					type: "radialBar",
				},
				plotOptions: {
					radialBar: {
						startAngle:-160,
						endAngle: 160,
						dataLabels: {
							name: {
								fontSize: '22px',
							},
							value: {
								fontSize: '16px',
							},
						}
					},
				},
				stroke:{
					lineCap: 'round',
				},
				labels: ['Income', 'Income', 'Imcome'],
				colors:['#FD683E', '#FFAF65','#FFE5A0'],
				responsive: [{
					breakpoint: 1601,
					options: {
						chart: {
						  height: 250,
						  type: 'radialBar',
						},
						
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
				  type="radialBar"
				  height={350}
				/>
			</div>
		);
	}
}

export default SalesPieChart;