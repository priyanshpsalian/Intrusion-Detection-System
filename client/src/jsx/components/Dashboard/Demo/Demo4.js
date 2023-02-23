import React,{useState, useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
import  {Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

///Images
import pic1 from './../../../../images/avatar/1.jpg';
import pic2 from './../../../../images/avatar/2.jpg';
import pic3 from './../../../../images/avatar/3.jpg';
import pic4 from './../../../../images/avatar/4.jpg';


//Import
import { ThemeContext } from "../../../../context/ThemeContext";
import RadialDount from './../Dashboard/RadialDount'; 
import ReservationChart from './../Dashboard/ReservationChart'; 
import LatestCustomer from './../Dashboard/LatestCustomer'; 

const AnalyticsDonut = loadable(() =>
	pMinDelay(import("./../Dashboard/AnalyticsDonut"), 1000)
);


const Demo4 = () => {
	const { 
		changeBackground, changeNavigationHader,
		changePrimaryColor,chnageHaderColor
		
	} = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
		changeNavigationHader("color_9");
		changePrimaryColor("color_9");
		chnageHaderColor("color_9");
	}, []);
	const [value, onChange] = useState(new Date());
	return(
		<>
			<div className="row">
				<div className="col-xl-3 col-sm-6">
					<div className="card gradient-1 card-bx">
						<div className="card-body d-flex align-items-center">
							<div className="me-auto text-white">
								<h2 className="text-white">872</h2>
								<span className="fs-18">New Booking</span>
							</div>
							<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M29.0611 39.4402L13.7104 52.5947C12.9941 53.2089 11.9873 53.3497 11.1271 52.9556C10.2697 52.5614 9.7226 51.7041 9.7226 50.7597C9.7226 50.7597 9.7226 26.8794 9.7226 14.5028C9.7226 9.16424 14.0517 4.83655 19.3904 4.83655H38.7289C44.0704 4.83655 48.3995 9.16424 48.3995 14.5028V50.7597C48.3995 51.7041 47.8495 52.5614 46.9922 52.9556C46.1348 53.3497 45.1252 53.2089 44.4088 52.5947L29.0611 39.4402ZM43.5656 14.5028C43.5656 11.8335 41.3996 9.66841 38.7289 9.66841C33.0207 9.66841 25.1014 9.66841 19.3904 9.66841C16.7196 9.66841 14.5565 11.8335 14.5565 14.5028V45.5056L27.4873 34.4215C28.3926 33.646 29.7266 33.646 30.6319 34.4215L43.5656 45.5056V14.5028Z" fill="white"/>
							</svg>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card gradient-2 card-bx">
						<div className="card-body d-flex align-items-center">
							<div className="me-auto text-white">
								<h2 className="text-white">285</h2>
								<span className="fs-18">Schedule Room</span>
							</div>
							<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M36.25 9.66665V7.24998C36.25 5.91598 37.3327 4.83331 38.6667 4.83331C40.0007 4.83331 41.0833 5.91598 41.0833 7.24998V9.66665C46.4242 9.66665 50.75 13.9949 50.75 19.3333V43.5C50.75 48.8384 46.4242 53.1666 41.0833 53.1666C34.1741 53.1666 23.8283 53.1666 16.9167 53.1666C11.5782 53.1666 7.25 48.8384 7.25 43.5V19.3333C7.25 13.9949 11.5782 9.66665 16.9167 9.66665V7.24998C16.9167 5.91598 17.9993 4.83331 19.3333 4.83331C20.6673 4.83331 21.75 5.91598 21.75 7.24998V9.66665H36.25ZM45.9167 29H12.0833V43.5C12.0833 46.168 14.2487 48.3333 16.9167 48.3333H41.0833C43.7537 48.3333 45.9167 46.168 45.9167 43.5V29ZM33.5748 37.8329L36.9822 34.5172C37.9392 33.5868 39.469 33.6086 40.3994 34.5656C41.3298 35.5202 41.3081 37.0523 40.3535 37.9827L35.3848 42.8161C34.4955 43.6788 33.1011 43.732 32.1513 42.9393L29.4302 40.6677C28.4055 39.8146 28.2677 38.2896 29.1232 37.265C29.9763 36.2403 31.5012 36.1026 32.5259 36.9581L33.5748 37.8329ZM41.0833 14.5V16.9166C41.0833 18.2506 40.0007 19.3333 38.6667 19.3333C37.3327 19.3333 36.25 18.2506 36.25 16.9166V14.5H21.75V16.9166C21.75 18.2506 20.6673 19.3333 19.3333 19.3333C17.9993 19.3333 16.9167 18.2506 16.9167 16.9166V14.5C14.2487 14.5 12.0833 16.6629 12.0833 19.3333V24.1666H45.9167V19.3333C45.9167 16.6629 43.7537 14.5 41.0833 14.5Z" fill="white"/>
							</svg>

						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card gradient-3 card-bx">
						<div className="card-body d-flex align-items-center">
							<div className="me-auto text-white">
								<h2 className="text-white">53</h2>
								<span className="fs-18">Check In</span>
							</div>
							<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M9.66671 38.6667V43.5C9.66671 48.8409 13.995 53.1667 19.3334 53.1667H43.5C48.8409 53.1667 53.1667 48.8409 53.1667 43.5C53.1667 35.455 53.1667 22.5475 53.1667 14.5C53.1667 9.16162 48.8409 4.83337 43.5 4.83337C36.5908 4.83337 26.245 4.83337 19.3334 4.83337C13.995 4.83337 9.66671 9.16162 9.66671 14.5V19.3334C9.66671 20.6674 10.7494 21.75 12.0834 21.75C13.4174 21.75 14.5 20.6674 14.5 19.3334C14.5 19.3334 14.5 17.069 14.5 14.5C14.5 11.832 16.6654 9.66671 19.3334 9.66671H43.5C46.1705 9.66671 48.3334 11.832 48.3334 14.5V43.5C48.3334 46.1705 46.1705 48.3334 43.5 48.3334C36.5908 48.3334 26.245 48.3334 19.3334 48.3334C16.6654 48.3334 14.5 46.1705 14.5 43.5C14.5 40.9335 14.5 38.6667 14.5 38.6667C14.5 37.3351 13.4174 36.25 12.0834 36.25C10.7494 36.25 9.66671 37.3351 9.66671 38.6667ZM27.9995 26.5834L24.8748 23.461C23.9323 22.5161 23.9323 20.9864 24.8748 20.0415C25.8197 19.099 27.3495 19.099 28.292 20.0415L35.542 27.2915C36.4869 28.2364 36.4869 29.7661 35.542 30.711L28.292 37.961C27.3495 38.9035 25.8197 38.9035 24.8748 37.961C23.9323 37.0161 23.9323 35.4864 24.8748 34.5415L27.9995 31.4167H7.25004C5.91604 31.4167 4.83337 30.334 4.83337 29C4.83337 27.6685 5.91604 26.5834 7.25004 26.5834H27.9995Z" fill="white"/>
							</svg>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card gradient-4 card-bx">
						<div className="card-body d-flex align-items-center">
							<div className="me-auto text-white">
								<h2 className="text-white">78</h2>
								<span className="fs-18">Check Out</span>
							</div>
							<svg width="57" height="46" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M8.55512 20.7503L11.4641 17.8435C12.3415 16.9638 12.3415 15.5397 11.4641 14.6601C10.5844 13.7827 9.16031 13.7827 8.28289 14.6601L1.53353 21.4094C0.653858 22.2891 0.653858 23.7132 1.53353 24.5929L8.28289 31.3422C9.16031 32.2197 10.5844 32.2197 11.4641 31.3422C12.3415 30.4626 12.3415 29.0385 11.4641 28.1588L8.55512 25.2498H27.8718C29.1137 25.2498 30.1216 24.2419 30.1216 23C30.1216 21.7604 29.1137 20.7503 27.8718 20.7503H8.55512Z" fill="white"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M16.5038 31.9992V36.4987C16.5038 41.4708 20.5332 45.4979 25.5029 45.4979H48.0008C52.9728 45.4979 57 41.4708 57 36.4987C57 29.0092 57 16.9931 57 9.50129C57 4.53151 52.9728 0.502136 48.0008 0.502136C41.5687 0.502136 31.9373 0.502136 25.5029 0.502136C20.5332 0.502136 16.5038 4.53151 16.5038 9.50129V14.0009C16.5038 15.2427 17.5117 16.2507 18.7536 16.2507C19.9955 16.2507 21.0034 15.2427 21.0034 14.0009C21.0034 14.0009 21.0034 11.8928 21.0034 9.50129C21.0034 7.01752 23.0192 5.00171 25.5029 5.00171H48.0008C50.4868 5.00171 52.5004 7.01752 52.5004 9.50129V36.4987C52.5004 38.9848 50.4868 40.9983 48.0008 40.9983C41.5687 40.9983 31.9373 40.9983 25.5029 40.9983C23.0192 40.9983 21.0034 38.9848 21.0034 36.4987C21.0034 34.1095 21.0034 31.9992 21.0034 31.9992C21.0034 30.7595 19.9955 29.7494 18.7536 29.7494C17.5117 29.7494 16.5038 30.7595 16.5038 31.9992Z" fill="white"/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-3 col-xxl-4">
					<div className="row">
						<div className="col-xl-12 col-sm-6">
							<div className="card text-center">
								<div className="card-body">
									<div id="radialChart" className="radialChart">
										<RadialDount />
									</div>
									<h2>785</h2>
									<span className="fs-16 text-black">Available Room Today</span>
								</div>
							</div>
						</div>
						<div className="col-xl-12 col-sm-6">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<h4 className="mb-0">Booked Room Today</h4>
								</div>
								<div className="card-body">
									<div className="progress mb-4" style={{height:"13px"}}>
										<div className="progress-bar gradient-5 progress-animated" style={{width: "55%", height:"13px"}} >
											<span className="sr-only">45% Complete</span>
										</div>
									</div>
									<div className="progress mb-4" style={{height:"13px"}}>
										<div className="progress-bar gradient-6 progress-animated" style={{width: "55%", height:"13px"}}>
											<span className="sr-only">45% Complete</span>
										</div>
									</div>
									<div className="progress default-progress" style={{height:"13px"}}>
										<div className="progress-bar gradient-7 progress-animated" style={{width: "55%", height:"13px"}}>
											<span className="sr-only">45% Complete</span>
										</div>
									</div>
									<div className="d-flex mt-4 progress-bar-legend align-items-center justify-content-between">
										<div className="d-flex">
											<span className="marker gradient-5"></span>
											<div>
												<p className="status">Pending</p>
												<span className="result">234</span>
											</div>
										</div>
										<div className="d-flex">
											<span className="marker gradient-6"></span>
											<div>
												<p className="status">Done</p>
												<span className="result">65</span>
											</div>
										</div>
										<div className="d-flex">
											<span className="marker gradient-7"></span>
											<div>
												<p className="status">Finish</p>
												<span className="result">763</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-xxl-8">
					<div className="card">
						<div className="card-header border-0 d-sm-flex d-block">
							<div className="me-auto mb-sm-0 mb-3">
								<h4 className="card-title mb-2">Reservation Statistic</h4>
								<span>Lorem ipsum dolor sit amet</span>
							</div>
							<div className="d-flex justify-content-between">
								<div className="d-flex me-5">
									<h3 className="mb-0 me-2">549</h3>
									<span>Check In</span>
								</div>
								<div className="d-flex me-3">
									<h3 className="mb-0 me-2">327</h3>
									<span>Check Out</span>
								</div>
								<Dropdown className="dropdown">
									<Dropdown.Toggle as="div" className="btn-link i-false" >
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
											<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
											<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu">
										<Dropdown.Item className="dropdown-item">Delete</Dropdown.Item>
										<Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>
						<div className="card-body">
							<div id="reservationChart" className="reservationChart">
								<ReservationChart />
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="card">
						<div className="card-body booking-calender">
							{/* <input type='text' className="form-control d-none" id='datetimepicker' /> */}
							<Calendar onChange={onChange} value={value}  />
						</div>
						<div className="card-body py-0">
							<div className="d-flex justify-content-between mb-3">
								<h4 className="card-title">Newest Booking</h4>
								<Link to={"#"} className="btn-link">More</Link>
							</div>
							<div className="row">								
								<div className="col-xl-6 col-sm-6">
									<div className="dz-image-bx rounded">
										<div className="dz-media active me-3">
											<img className="rounded" src={pic1} alt="" />
										</div>
										<div className="dz-info">
											<h5>Samantha Humble</h5>
											<span className="text-primary">October 3th, 2020</span>
											<div className="d-flex flex-wrap mt-3">
												<span className="me-auto pe-3">Room A-21</span>
												<span>3-5 Person</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-sm-6">
									<div className="dz-image-bx rounded">
										<div className="dz-media active me-3">
											<img className="rounded" src={pic2} alt="" />
										</div>
										<div className="dz-info">
											<h5>Louise Marquee</h5>
											<span className="text-primary">October 3th, 2020</span>
											<div className="d-flex flex-wrap mt-3">
												<span className="me-auto pe-3">Room A-21</span>
												<span>3-5 Person</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-sm-6">
									<div className="dz-image-bx rounded">
										<div className="dz-media me-3">
											<img className="rounded" src={pic3} alt="" /> 
										</div>
										<div className="dz-info">
											<h5>Richard Smile</h5>
											<span className="text-primary">October 3th, 2020</span>
											<div className="d-flex flex-wrap mt-3">
												<span className="me-auto pe-3">Room A-21</span>
												<span>3-5 Person</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-sm-6">
									<div className="dz-image-bx rounded">
										<div className="dz-media me-3">
											<img className="rounded" src={pic4} alt="" />
										</div>
										<div className="dz-info">
											<h5>Bella Yen</h5>
											<span className="text-primary">October 3th, 2020</span>
											<div className="d-flex flex-wrap mt-3">
												<span className="me-auto pe-3">Room A-21</span>
												<span>3-5 Person</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-sm-6">
									<div className="dz-image-bx rounded">
										<div className="dz-media me-3">
											<img className="rounded" src={pic1} alt="" /> 
										</div>
										<div className="dz-info">
											<h5>Richard Smile</h5>
											<span className="text-primary">October 3th, 2020</span>
											<div className="d-flex flex-wrap mt-3">
												<span className="me-auto pe-3">Room A-21</span>
												<span>3-5 Person</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-sm-6">
									<div className="dz-image-bx rounded">
										<div className="dz-media active me-3">
											<img className="rounded" src={pic2} alt="" />
										</div>
										<div className="dz-info">
											<h5>Samantha Humble</h5>
											<span className="text-primary">October 3th, 2020</span>
											<div className="d-flex flex-wrap mt-3">
												<span className="me-auto pe-3">Room A-21</span>
												<span>3-5 Person</span>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-xl-6 d-flex align-items-center col-sm-6 mb-sm-0 mb-3">
											<div className="me-4">
												<AnalyticsDonut value={75} backgroundColor="#1362fc" backgroundColor2="rgb(246, 246, 246)"/>
												{/* <span className="donut" data-peity='{ "fill": ["var(--primary)", "rgba(246, 246, 246)"],   "innerRadius": 45, "radius": 10}'>6/8</span> */}
											</div>
											<div>
												<h2>70%</h2>
												<span className="fs-18">Check In</span>
											</div>
										</div>
										<div className="col-xl-6 d-flex align-items-center col-sm-6">
											<div className="me-4">
												<AnalyticsDonut value={25} backgroundColor="#FFC368" backgroundColor2="rgb(246, 246, 246)"/>												
											</div>
											<div>
												<h2>30%</h2>
												<span className="fs-18">Check Out</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<LatestCustomer />
						</div>
					</div>
				</div>				
			</div>	
		</>
	)
}
export default Demo4;