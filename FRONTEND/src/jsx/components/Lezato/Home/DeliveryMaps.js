import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";
import {Dropdown} from 'react-bootstrap';
//Images
import map from './../../../../images/map1.png';
import cont11 from './../../../../images/contacts/c11.jpg';
import cont22 from './../../../../images/contacts/c22.jpg';
import cont33 from './../../../../images/contacts/c33.jpg';

const deliveryBlog = [
	{image: cont11, title: 'John Kusnaidi', subtitle:'Franklin Avenue St. London, ABC 12345'},
	{image: cont22, title: 'Margaretha', 	subtitle:'Groove Street Families, DEF 244125' },
	{image: cont33, title: 'Richard Lee', 	subtitle:'Bossman St. 21444 ABC' },
];


const DeliveryMaps = () =>{
	// This is load more function 
	const [data, setData] = useState(deliveryBlog);
	const [refresh, setRefresh] = useState(false);
	const onClick = () => {
		setRefresh(true);
		setTimeout(() => {
		  setData([
			...data,
			data[Math.floor(Math.random() * Math.floor(data.length - 1))],
		  ]);
		  setRefresh(false);
		}, 1000);
	};
	return(
		<>
			<div className="card">
				<div className="card-header border-0">
					<div>	
						<h4 className="fs-20 mb-1">Delivery Maps</h4>
						<span>Lorem ipsum dolor sit amet, consectetur</span>
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
							<Dropdown.Item >Details</Dropdown.Item>
							<Dropdown.Item className="text-danger">Cancel</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="card-body pb-0">
					<img src={map} className="w-100" alt="" />
					<div className="d-flex align-items-center my-4">
						<svg className="me-2 vert-move" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M44.0137 6.54388C42.2281 4.7611 39.4593 4.65722 36.8259 7.28777L28.7931 15.32C27.902 14.9411 26.9876 14.7305 26.2148 14.5211L10.4654 11.0694C7.87258 10.5022 5.30925 13.9917 9.24425 16.2661L21.0359 23.0772L13.5298 32.3533L8.5037 31.9028C6.79647 31.7522 5.41036 33.5628 7.28536 35.4389L15.1209 43.2711C16.9959 45.1461 18.8076 43.7628 18.6537 42.0555L18.2054 37.0294L27.4815 29.5206L34.2931 41.3144C36.5676 45.25 40.057 42.6839 39.4898 40.0939L36.0348 24.3439C35.8293 23.5711 35.6181 22.6572 35.2387 21.7639L43.2681 13.7339C45.9026 11.1011 45.7987 8.32944 44.0137 6.54388Z" fill="#624FD1"/>
							<path d="M8.3045 18.5694C7.97728 18.5811 7.66784 18.7167 7.43895 18.9517L4.86339 21.5266C4.37228 22.0183 4.37228 22.8172 4.86117 23.3094C5.35339 23.8011 6.15173 23.8044 6.64339 23.3116L9.21895 20.7372C10.0495 19.9355 9.45617 18.5344 8.3045 18.5694Z" fill="#FD683E"/>
							<path d="M13.8341 21.4261C13.5069 21.4339 13.1975 21.5733 12.9686 21.8072L7.5347 27.2416C7.04248 27.7333 7.0397 28.5283 7.53192 29.0233C8.02359 29.515 8.82192 29.515 9.31414 29.0233L14.748 23.5894C15.5764 22.7911 14.9864 21.3905 13.8341 21.4261Z" fill="#FD683E"/>
							<path d="M27.8357 35.4295C27.5085 35.4411 27.1963 35.5772 26.9702 35.8117L21.5363 41.2456C21.0041 41.7295 20.9841 42.5595 21.493 43.0684C21.9996 43.5784 22.833 43.5578 23.3157 43.025L28.753 37.5911C29.5746 36.7906 28.9846 35.395 27.8357 35.4295Z" fill="#FD683E"/>
							<path d="M30.6888 40.9594C30.3616 40.9683 30.0521 41.105 29.8233 41.3383L27.2477 43.9178C26.756 44.4094 26.756 45.2078 27.251 45.6961C27.7427 46.1889 28.541 46.1889 29.0333 45.6961L31.6088 43.1211C32.4305 42.3166 31.8377 40.9222 30.6888 40.9594Z" fill="#FD683E"/>
						</svg>
						<h5 className="fs-20">Upcoming Shipping Schedule </h5>
					</div>
					<PerfectScrollbar className="dz-scroll">	
						<div className="loadmore-content " id="DelieveryListContent">
							{data.map((data, index)=>(
								<div className="d-sm-flex d-block border-bottom align-items-center mb-2" key={index}>
									<div className="delivery-customer me-auto mb-2">
										<img src={data.image} alt="" />	
										<div>	
											<span className="font-w600 text-black fs-16">{data.title} <span className="text-primary">(4 Items)</span></span>
											<span className="d-block fs-12 font-w600">Will be shipping on 11 : 24 AM</span>
										</div>	
									</div>
									<div className="d-flex align-items-center justify-content-end text-end location mb-2">
										<div>
											<span className="d-block f-s14 font-w400 text-black">{data.subtitle}</span>
											<span className="text-end f-s14 font-w400 text-black">United Kingdom</span>
										</div>
										<i className="fas fa-map-marker-alt"></i>
									</div>
								</div>
							))}
						</div>
					</PerfectScrollbar>	
				</div>
				<div className="card-footer border-0 down-arrow pb-0">
					<Link to={"#"} className="dz-load-more fas fa-chevron-down" onClick={() => onClick()} >{" "}
						{refresh && <i className="fas fa-sync-alt ms-1"></i>}
					</Link>
				</div>
			</div>
		</>
	)
}
export default DeliveryMaps;