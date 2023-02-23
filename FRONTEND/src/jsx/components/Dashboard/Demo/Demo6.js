import React,{useContext, useEffect} from 'react';

//Import
import { ThemeContext } from "../../../context/ThemeContext";
import PageHead from '../Griya/PageHead';
import DonutChart from '../Griya/Home/DonutChart';
import CustomerMap from '../Griya/Home/CustomerMap';
import OverView from '../Griya/Home/OverView';
import PieChartSection from '../Griya/Home/PieChartSection';
import PropetiesMap from '../Griya/Home/PropetiesMap';
import ProgressBar from '../Griya/Home/ProgressBar';
import CustomerReview from '../Griya/Home/CustomerReview';
import RecentCustomer from '../Griya/Home/RecentCustomer';

const Demo6 = () => {
	const { 
		changeBackground,changeNavigationHader,
		changePrimaryColor,chnageSidebarColor 
	}
	= useContext(ThemeContext);
	
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
		changeNavigationHader("color_5");
		chnageSidebarColor("color_5");
		changePrimaryColor("color_5");
	}, []);
	return(
		<>
			<PageHead activePage="Dashboard"  pageName="Dashboard" />
			<div className="row">
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div className="card-data me-2">
								<h5>Propeties for Sale</h5>
								<h2 className="fs-40 font-w600">684</h2>
							</div>
							<DonutChart value="83" backgroundColor="rgb(33,111,237)"
								backgroundColor2= "rgba(242, 246, 252)"
							/>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div className="card-data me-2">
								<h5>Propeties for Rent</h5>
								<h2 className="fs-40 font-w600">546</h2>
							</div>
							<DonutChart value="25" backgroundColor="rgb(56, 226, 93)"
								backgroundColor2= "rgba(242, 246, 252)"
							/>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div className="card-data me-2">
								<h5>Total Customer</h5>
								<h2 className="fs-40 font-w600">3,672</h2>
							</div>
							<DonutChart value="63" backgroundColor="rgb(255, 135, 35)"
								backgroundColor2= "rgba(242, 246, 252)"
							/>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div className="card-data me-2">
								<h5>Total City</h5>
								<h2 className="fs-40 font-w600">75</h2>
							</div>
							<DonutChart value="40" backgroundColor="rgb(51, 62, 75,1)"
								backgroundColor2= "rgba(242, 246, 252)"
							/>
						</div>
					</div>
				</div>
			</div>	
			<div className="row">
				<div className="col-xl-9 col-xxl-8">
					<div className="row">
						<div className="col-xl-12">
							<CustomerMap />
						</div>
						<div className="col-xl-8 col-xxl-12">
							<OverView />
						</div>
						<div className="col-xl-4 col-xxl-12">
							<PieChartSection />
						</div>
						<div className="col-xl-12">
							<PropetiesMap />
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-xxl-4">
					<div className="row">
						<div className="col-xl-12">
							<ProgressBar />
						</div>
						<div className="col-xl-12 col-md-6">
							<CustomerReview />
						</div>
						<div className="col-xl-12 col-md-6">
							<RecentCustomer />
						</div>
					</div>
					
				</div>
			</div>
		</>
	)
}
export default Demo6;