import React from 'react';
import {Tab, Nav, Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const TimeLineApexChart = loadable(() =>
	pMinDelay(import("./TimeLineApexChart"), 1000)
);
const TimeLineApexChart2 = loadable(() =>
	pMinDelay(import("./TimeLineApexChart2"), 1000)
);


const CustomerMap = () => {
	return(
		<>
			<Tab.Container defaultActiveKey="Monthly">
				<div className="card">
					<div className="card-header border-0  flex-wrap">
						<div>
							<h4 className="fs-20 mb-1">Customer Map</h4>
							<span>Lorem ipsum dolor sit amet, consectetur</span>
						</div>	
						<div className="d-flex align-items-center">
							<div className="card-action coin-tabs mt-3 mt-sm-0">
								<Nav as="ul" className="nav nav-tabs" role="tablist">
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Monthly" role="tab">
											Monthly
										</Nav.Link>
									</Nav.Item>
									<Nav.Item className="nav-item">
										<Nav.Link className="nav-link"  eventKey="Daily" role="tab" >
											Daily
										</Nav.Link>
									</Nav.Item>
									<Nav.Item className="nav-item">
										<Nav.Link className="nav-link"  eventKey="Today" role="tab" >
											Today
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
							<Dropdown className="dropdown custom-dropdown mb-0 ms-3">
								<Dropdown.Toggle as="div" className="btn sharp tp-btn dark-btn i-false">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</Dropdown.Toggle>
								<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
									<Dropdown.Item eventKey="Monthly">Details</Dropdown.Item>
									<Dropdown.Item eventKey="Today" className="text-danger">Cancel</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
					<div className="card-body pb-2">
						<Tab.Content >
							<Tab.Pane eventKey="Monthly">
								<div id="chartTimeline1" className="chart-timeline">
									<TimeLineApexChart />
								</div>
							</Tab.Pane>	
							<Tab.Pane eventKey="Daily">
								<div id="chartTimeline2" className="chart-timeline">
									<TimeLineApexChart2 />
								</div>
							</Tab.Pane>	
							<Tab.Pane eventKey="Today">
								<div id="chartTimeline3" className="chart-timeline">
									<TimeLineApexChart />
								</div>
							</Tab.Pane>									
						</Tab.Content>		
					</div>	
				</div>
			</Tab.Container>	
		</>
	)
}
export default CustomerMap;