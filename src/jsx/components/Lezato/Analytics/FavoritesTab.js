import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Tab} from 'react-bootstrap';

import fav1 from './../../../../images/menu/fav1.jpg'; 
import fav2 from './../../../../images/menu/fav2.jpg'; 

import DonutChart from '../Home/DonutChart';
import InterestChart from './InterestChart';

const favtitemBlog = [
	{image: fav1},
	{image: fav2},
	{image: fav1},
];
const favtitemBlog2 = [
	{image: fav1},
	{image: fav2},
];
const favtitemBlog3 = [
	{image: fav1},
];

const  FavoritesTab = () =>{
	return(
		<>
			<Tab.Container defaultActiveKey="AllCategories">
				<div className="card">
					<div className="card-header border-0 flex-wrap pb-2">
						<div className="mb-sm-3">	
							<h4>Most Favorites Items</h4>
							<span>Lorem ipsum dolor sit amet, consectetur</span>
						</div>	
						<div className="card-action coin-tabs mt-3 mt-sm-0">
							<Nav as="ul" className="nav nav-tabs" role="tablist">
								<Nav.Item as="li" className="nav-item">
									<Nav.Link className="nav-link "  eventKey="AllCategories" role="tab">	
										All Categories
									</Nav.Link>
								</Nav.Item>
								<Nav.Item as="li" className="nav-item">
									<Nav.Link className="nav-link " eventKey="MainCourse" role="tab" >
										Main Course
									</Nav.Link>
								</Nav.Item>
								<Nav.Item as="li" className="nav-item">
									<Nav.Link className="nav-link" eventKey="Pizza" role="tab" >
										Pizza
									</Nav.Link>
								</Nav.Item>
								<Nav.Item as="li" className="nav-item">
									<Nav.Link className="nav-link" eventKey="Drink" role="tab" >
										Drink
									</Nav.Link>
								</Nav.Item>
								<Nav.Item as="li" className="nav-item">
									<Nav.Link className="nav-link" eventKey="Dessert" role="tab" >
										Dessert
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</div>
					</div>
					<div className="card-body py-0">
						<Tab.Content >
							<Tab.Pane eventKey="AllCategories">
								{favtitemBlog.map((data,index)=>(
									<div className="row align-items-center border-bottom" key={index}>
										<div className="col-xl-5 col-lg-5">
											<div className="d-flex align-items-center my-4">
												<div className="favt-item me-3">
													<img src={data.image} alt="" />
												</div>
												<div>
													<h5><Link to={"/ecom-product-grid"} className="text-black">Creamy Parmesan Cheese with Chicken Teriyaki Egg</Link></h5>
													<div className="star-review d-flex align-items-center fs-14 mb-3">
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-gray"></i>
														<i className="fa fa-star text-gray"></i>
														<span className="ms-3 text-dark">(454 revies)</span>
													</div>
													<span>
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M20.8406 4.60999C20.3299 4.099 19.7234 3.69364 19.056 3.41708C18.3885 3.14052 17.6731 2.99817 16.9506 2.99817C16.2281 2.99817 15.5127 3.14052 14.8453 3.41708C14.1778 3.69364 13.5714 4.099 13.0606 4.60999L12.0006 5.66999L10.9406 4.60999C9.90891 3.5783 8.50964 2.9987 7.05061 2.9987C5.59157 2.9987 4.1923 3.5783 3.16061 4.60999C2.12892 5.64169 1.54932 7.04096 1.54932 8.49999C1.54932 9.95903 2.12892 11.3583 3.16061 12.39L4.22061 13.45L12.0006 21.23L19.7806 13.45L20.8406 12.39C21.3516 11.8792 21.757 11.2728 22.0335 10.6053C22.3101 9.93789 22.4524 9.22248 22.4524 8.49999C22.4524 7.77751 22.3101 7.0621 22.0335 6.39464C21.757 5.72718 21.3516 5.12075 20.8406 4.60999Z" fill="#FD683E"/>
														</svg>
													</span>
													<span className="text-primary">256k Like it</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-4 col-6">
											<div className="d-flex align-items-center mb-4">
												<div id="NewCustomers">
													<InterestChart />
												</div>
												<div className="ms-2">
													<h4 className="fs-24 font-w600 mb-0">45%</h4>
													<span>Interest</span>
												</div>
											</div>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 mb-4 col-6">
											<div className="d-flex ">
												<svg className="me-2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" fill="#FD683E"/>
													<rect x="7.09082" y="7.09088" width="3.54545" height="18.9091" rx="1.77273" fill="#FD683E"/>
													<rect x="14.1816" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#FD683E"/>
													<rect x="21.2725" y="3.54547" width="3.54545" height="22.4545" rx="1.77273" fill="#FD683E"/>
												</svg>
												<h4 className="fs-22 font-w700 mb-0">6,732</h4>
											</div>	
											<span className="font-w600 text-black">Total Sales</span>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 d-sm-block d-none mb-4">
											<div className="d-inline-block position-relative donut-chart-sale mb-4">
											{/* <span className="donut1" data-peity='{ "fill": ["var(--primary)", "rgba(235, 235, 235)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
												<DonutChart value={60} backgroundColor="rgba(253,104,62,1)"
													backgroundColor2= "rgba(235, 235, 235)"
												/>
												<small className="text-black">75%</small>
											</div>
										</div>
									</div>
								))}	
							</Tab.Pane>
							<Tab.Pane eventKey="MainCourse">
								{favtitemBlog2.map((data,index)=>(
									<div className="row align-items-center border-bottom" key={index}>
										<div className="col-xl-5 col-lg-5">
											<div className="d-flex align-items-center my-4">
												<div className="favt-item me-3">
													<img src={data.image} alt="" />
												</div>
												<div>
													<h5><Link to={"/ecom-product-grid"} className="text-black">Creamy Parmesan Cheese with Chicken Teriyaki Egg</Link></h5>
													<div className="star-review d-flex align-items-center fs-14 mb-3">
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-gray"></i>
														<i className="fa fa-star text-gray"></i>
														<span className="ms-3 text-dark">(454 revies)</span>
													</div>
													<span>
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M20.8406 4.60999C20.3299 4.099 19.7234 3.69364 19.056 3.41708C18.3885 3.14052 17.6731 2.99817 16.9506 2.99817C16.2281 2.99817 15.5127 3.14052 14.8453 3.41708C14.1778 3.69364 13.5714 4.099 13.0606 4.60999L12.0006 5.66999L10.9406 4.60999C9.90891 3.5783 8.50964 2.9987 7.05061 2.9987C5.59157 2.9987 4.1923 3.5783 3.16061 4.60999C2.12892 5.64169 1.54932 7.04096 1.54932 8.49999C1.54932 9.95903 2.12892 11.3583 3.16061 12.39L4.22061 13.45L12.0006 21.23L19.7806 13.45L20.8406 12.39C21.3516 11.8792 21.757 11.2728 22.0335 10.6053C22.3101 9.93789 22.4524 9.22248 22.4524 8.49999C22.4524 7.77751 22.3101 7.0621 22.0335 6.39464C21.757 5.72718 21.3516 5.12075 20.8406 4.60999Z" fill="#FD683E"/>
														</svg>
													</span>
													<span className="text-primary">256k Like it</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-4 col-6">
											<div className="d-flex align-items-center mb-4">
												<div id="NewCustomers">
													<InterestChart />
												</div>
												<div className="ms-2">
													<h4 className="fs-24 font-w600 mb-0">45%</h4>
													<span>Interest</span>
												</div>
											</div>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 mb-4 col-6">
											<div className="d-flex ">
												<svg className="me-2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" fill="#FD683E"/>
													<rect x="7.09082" y="7.09088" width="3.54545" height="18.9091" rx="1.77273" fill="#FD683E"/>
													<rect x="14.1816" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#FD683E"/>
													<rect x="21.2725" y="3.54547" width="3.54545" height="22.4545" rx="1.77273" fill="#FD683E"/>
												</svg>
												<h4 className="fs-22 font-w700 mb-0">6,732</h4>
											</div>	
											<span className="font-w600 text-black">Total Sales</span>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 d-sm-block d-none mb-4">
											<div className="d-inline-block position-relative donut-chart-sale mb-4">
											{/* <span className="donut1" data-peity='{ "fill": ["var(--primary)", "rgba(235, 235, 235)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
												<DonutChart value={60} backgroundColor="rgba(253,104,62,1)"
													backgroundColor2= "rgba(235, 235, 235)"
												/>
												<small className="text-black">75%</small>
											</div>
										</div>
									</div>
								))}	
							</Tab.Pane>
							<Tab.Pane eventKey="Pizza">
								{favtitemBlog3.map((data,index)=>(
									<div className="row align-items-center border-bottom" key={index}>
										<div className="col-xl-5 col-lg-5">
											<div className="d-flex align-items-center my-4">
												<div className="favt-item me-3">
													<img src={data.image} alt="" />
												</div>
												<div>
													<h5><Link to={"/ecom-product-grid"} className="text-black">Creamy Parmesan Cheese with Chicken Teriyaki Egg</Link></h5>
													<div className="star-review d-flex align-items-center fs-14 mb-3">
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-gray"></i>
														<i className="fa fa-star text-gray"></i>
														<span className="ms-3 text-dark">(454 revies)</span>
													</div>
													<span>
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M20.8406 4.60999C20.3299 4.099 19.7234 3.69364 19.056 3.41708C18.3885 3.14052 17.6731 2.99817 16.9506 2.99817C16.2281 2.99817 15.5127 3.14052 14.8453 3.41708C14.1778 3.69364 13.5714 4.099 13.0606 4.60999L12.0006 5.66999L10.9406 4.60999C9.90891 3.5783 8.50964 2.9987 7.05061 2.9987C5.59157 2.9987 4.1923 3.5783 3.16061 4.60999C2.12892 5.64169 1.54932 7.04096 1.54932 8.49999C1.54932 9.95903 2.12892 11.3583 3.16061 12.39L4.22061 13.45L12.0006 21.23L19.7806 13.45L20.8406 12.39C21.3516 11.8792 21.757 11.2728 22.0335 10.6053C22.3101 9.93789 22.4524 9.22248 22.4524 8.49999C22.4524 7.77751 22.3101 7.0621 22.0335 6.39464C21.757 5.72718 21.3516 5.12075 20.8406 4.60999Z" fill="#FD683E"/>
														</svg>
													</span>
													<span className="text-primary">256k Like it</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-4 col-6">
											<div className="d-flex align-items-center mb-4">
												<div id="NewCustomers">
													<InterestChart />
												</div>
												<div className="ms-2">
													<h4 className="fs-24 font-w600 mb-0">45%</h4>
													<span>Interest</span>
												</div>
											</div>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 mb-4 col-6">
											<div className="d-flex ">
												<svg className="me-2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" fill="#FD683E"/>
													<rect x="7.09082" y="7.09088" width="3.54545" height="18.9091" rx="1.77273" fill="#FD683E"/>
													<rect x="14.1816" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#FD683E"/>
													<rect x="21.2725" y="3.54547" width="3.54545" height="22.4545" rx="1.77273" fill="#FD683E"/>
												</svg>
												<h4 className="fs-22 font-w700 mb-0">6,732</h4>
											</div>	
											<span className="font-w600 text-black">Total Sales</span>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 d-sm-block d-none mb-4">
											<div className="d-inline-block position-relative donut-chart-sale mb-4">
											{/* <span className="donut1" data-peity='{ "fill": ["var(--primary)", "rgba(235, 235, 235)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
												<DonutChart value={60} backgroundColor="rgba(253,104,62,1)"
													backgroundColor2= "rgba(235, 235, 235)"
												/>
												<small className="text-black">75%</small>
											</div>
										</div>
									</div>
								))}	
							</Tab.Pane>
							<Tab.Pane eventKey="Drink">
								{favtitemBlog2.map((data,index)=>(
									<div className="row align-items-center border-bottom" key={index}>
										<div className="col-xl-5 col-lg-5">
											<div className="d-flex align-items-center my-4">
												<div className="favt-item me-3">
													<img src={data.image} alt="" />
												</div>
												<div>
													<h5><Link to={"/ecom-product-grid"} className="text-black">Creamy Parmesan Cheese with Chicken Teriyaki Egg</Link></h5>
													<div className="star-review d-flex align-items-center fs-14 mb-3">
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-gray"></i>
														<i className="fa fa-star text-gray"></i>
														<span className="ms-3 text-dark">(454 revies)</span>
													</div>
													<span>
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M20.8406 4.60999C20.3299 4.099 19.7234 3.69364 19.056 3.41708C18.3885 3.14052 17.6731 2.99817 16.9506 2.99817C16.2281 2.99817 15.5127 3.14052 14.8453 3.41708C14.1778 3.69364 13.5714 4.099 13.0606 4.60999L12.0006 5.66999L10.9406 4.60999C9.90891 3.5783 8.50964 2.9987 7.05061 2.9987C5.59157 2.9987 4.1923 3.5783 3.16061 4.60999C2.12892 5.64169 1.54932 7.04096 1.54932 8.49999C1.54932 9.95903 2.12892 11.3583 3.16061 12.39L4.22061 13.45L12.0006 21.23L19.7806 13.45L20.8406 12.39C21.3516 11.8792 21.757 11.2728 22.0335 10.6053C22.3101 9.93789 22.4524 9.22248 22.4524 8.49999C22.4524 7.77751 22.3101 7.0621 22.0335 6.39464C21.757 5.72718 21.3516 5.12075 20.8406 4.60999Z" fill="#FD683E"/>
														</svg>
													</span>
													<span className="text-primary">256k Like it</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-4 col-6">
											<div className="d-flex align-items-center mb-4">
												<div id="NewCustomers">
													<InterestChart />
												</div>
												<div className="ms-2">
													<h4 className="fs-24 font-w600 mb-0">45%</h4>
													<span>Interest</span>
												</div>
											</div>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 mb-4 col-6">
											<div className="d-flex ">
												<svg className="me-2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" fill="#FD683E"/>
													<rect x="7.09082" y="7.09088" width="3.54545" height="18.9091" rx="1.77273" fill="#FD683E"/>
													<rect x="14.1816" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#FD683E"/>
													<rect x="21.2725" y="3.54547" width="3.54545" height="22.4545" rx="1.77273" fill="#FD683E"/>
												</svg>
												<h4 className="fs-22 font-w700 mb-0">6,732</h4>
											</div>	
											<span className="font-w600 text-black">Total Sales</span>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 d-sm-block d-none mb-4">
											<div className="d-inline-block position-relative donut-chart-sale mb-4">
											{/* <span className="donut1" data-peity='{ "fill": ["var(--primary)", "rgba(235, 235, 235)"],   "innerRadius": 35, "radius": 10}'>5/8</span> */}
												<DonutChart value={60} backgroundColor="rgba(253,104,62,1)"
													backgroundColor2= "rgba(235, 235, 235)"
												/>
												<small className="text-black">75%</small>
											</div>
										</div>
									</div>
								))}	
							</Tab.Pane>
							<Tab.Pane eventKey="Dessert">
								{favtitemBlog.map((data,index)=>(
									<div className="row align-items-center border-bottom" key={index}>
										<div className="col-xl-5 col-lg-5">
											<div className="d-flex align-items-center my-4">
												<div className="favt-item me-3">
													<img src={data.image} alt="" />
												</div>
												<div>
													<h5><Link to={"/ecom-product-grid"} className="text-black">Creamy Parmesan Cheese with Chicken Teriyaki Egg</Link></h5>
													<div className="star-review d-flex align-items-center fs-14 mb-3">
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-orange"></i>
														<i className="fa fa-star text-gray"></i>
														<i className="fa fa-star text-gray"></i>
														<span className="ms-3 text-dark">(454 revies)</span>
													</div>
													<span>
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M20.8406 4.60999C20.3299 4.099 19.7234 3.69364 19.056 3.41708C18.3885 3.14052 17.6731 2.99817 16.9506 2.99817C16.2281 2.99817 15.5127 3.14052 14.8453 3.41708C14.1778 3.69364 13.5714 4.099 13.0606 4.60999L12.0006 5.66999L10.9406 4.60999C9.90891 3.5783 8.50964 2.9987 7.05061 2.9987C5.59157 2.9987 4.1923 3.5783 3.16061 4.60999C2.12892 5.64169 1.54932 7.04096 1.54932 8.49999C1.54932 9.95903 2.12892 11.3583 3.16061 12.39L4.22061 13.45L12.0006 21.23L19.7806 13.45L20.8406 12.39C21.3516 11.8792 21.757 11.2728 22.0335 10.6053C22.3101 9.93789 22.4524 9.22248 22.4524 8.49999C22.4524 7.77751 22.3101 7.0621 22.0335 6.39464C21.757 5.72718 21.3516 5.12075 20.8406 4.60999Z" fill="#FD683E"/>
														</svg>
													</span>
													<span className="text-primary">256k Like it</span>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-4 col-6">
											<div className="d-flex align-items-center mb-4">
												<div id="NewCustomers">
													<InterestChart />
												</div>
												<div className="ms-2">
													<h4 className="fs-24 font-w600 mb-0">45%</h4>
													<span>Interest</span>
												</div>
											</div>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 mb-4 col-6">
											<div className="d-flex ">
												<svg className="me-2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" fill="#FD683E"/>
													<rect x="7.09082" y="7.09088" width="3.54545" height="18.9091" rx="1.77273" fill="#FD683E"/>
													<rect x="14.1816" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#FD683E"/>
													<rect x="21.2725" y="3.54547" width="3.54545" height="22.4545" rx="1.77273" fill="#FD683E"/>
												</svg>
												<h4 className="fs-22 font-w700 mb-0">6,732</h4>
											</div>	
											<span className="font-w600 text-black">Total Sales</span>
										</div>
										<div className="col-xl-2 col-lg-2 col-sm-4 d-sm-block d-none mb-4">
											<div className="d-inline-block position-relative donut-chart-sale mb-4">
												<DonutChart value={60} backgroundColor="rgba(253,104,62,1)"
													backgroundColor2= "rgba(235, 235, 235)"
												/>
												<small className="text-black">75%</small>
											</div>
										</div>
									</div>
								))}	
							</Tab.Pane>
						</Tab.Content>
					</div>
					<div className="card-footer border-0 down-arrow p-0">
						<Link to={"#"}><i className="fas fa-chevron-down"></i></Link>
					</div>
				</div>
			</Tab.Container>	
		</>
	)
}
export default FavoritesTab;