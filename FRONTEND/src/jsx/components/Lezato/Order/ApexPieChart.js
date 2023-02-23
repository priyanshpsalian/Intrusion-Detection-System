import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [34, 12, 41],
			options: {
				chart: {
					height: 250,
					type: "donut",
				},
				dataLabels:{
					enabled: false
				},
				stroke: {
				  width: 0,
				},
				colors:['#624FD1', '#72C1E2', '#FFA41D'],
				legend: {
					position: 'bottom',
					show:false
				},
				responsive: [{
					breakpoint: 768,
					options: {
						chart: {
							height:200
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
				  type="donut"
				  height={250}
				/>
			</div>
		);
	}
}

export default ApexPieChart;