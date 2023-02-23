import React from 'react';
import {Link} from  'react-router-dom';
import {Tab, Nav} from 'react-bootstrap';

///Images

import pic11 from './../../../images/avatar/pic11.jpg';
import pic22 from './../../../images/avatar/pic22.jpg';
import pic33 from './../../../images/avatar/pic33.jpg';
import pic44 from './../../../images/avatar/pic44.jpg';

const ReviewList = [
	{image: pic11, title:'Rio Fernandez'},
	{image: pic22, title:'Oliver Jean'},
	{image: pic33, title:'Post Melone'},
	{image: pic44, title:'Kevin Mandala'},
	{image: pic11, title:'Mc. Kowalski'},
];
const ReviewList2 = [	
	{image: pic33, title:'Mc. Kowalski'},
	{image: pic44, title:'Kevin Mandala'},
	
];
const ReviewList3 = [
	{image: pic22, title:'Oliver Jean'},
	{image: pic11, title:'Mc. Kowalski'},
];

const Reviews = () =>{
	return(
		<>
			<Tab.Container defaultActiveKey="All">
				<div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-header d-md-flex d-block p-0">
								<div className="card-tabs mt-3 mt-sm-0 mb-sm-0 mb-3">
									<Nav as="ul" className="nav nav-tabs shadow-none" role="tablist">
										<Nav.Item as="li" className="nav-item">
											<Nav.Link className="nav-link" eventKey="All">All Reviews</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li" className="nav-item">
											<Nav.Link className="nav-link" eventKey="Published">Published</Nav.Link>
										</Nav.Item>
										<Nav.Item as="li" className="nav-item">
											<Nav.Link className="nav-link" eventKey="Deleted">Deleted</Nav.Link>
										</Nav.Item>
									</Nav>
								</div>
								<div className="d-flex p-md-0 p-sm-4 p-3">
									<span className="me-3">Sort by rate:</span>
									<ul className="star-review">
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star orange"></i></li>
									</ul>
								</div>
							</div>
							<div className="card-body pb-0">
								<Tab.Content className="tab-content">	
									<Tab.Pane eventKey="All">
										{ReviewList.map((data, index)=>(
											<div className="row align-items-center customer-review-list" key={index}>
												<div className="col-xl-3 col-lg-4 mb-xl-0 mb-3">
													<div className="review-bx">
														<img className="me-3" src={data.image} alt="" />
														<div>
															<span className="text-primary fs-16">#EMP-00025</span>
															<h4 className="mt-1 fs-20 font-w600"><Link className="text-black" to={"./guest-detail"}>{data.title}</Link></h4>
															<span className="fs-12">Posted on 26/12/2021, 06:50 AM</span>
														</div>
													</div>
												</div>
												<div className="col-xl-6 col-xxl-6">
													<ul className="star-review mb-2">
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star"></i></li>
													</ul>
													<p className="mb-0">I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent</p>
												</div>
												<div className="col-xl-3 text-end col-xxl-2 action-btn">
													<Link to={"#"} className="review-icon rounded-circle btn-success me-3" ><i className="far fa-check-circle"></i></Link>
													<Link className="review-icon rounded-circle btn-danger"><i className="far fa-times-circle"></i></Link>
												</div>
											</div>	
										))}
									</Tab.Pane>
									<Tab.Pane eventKey="Published">
										{ReviewList2.map((data, index)=>(
											<div className="row align-items-center customer-review-list" key={index}>
												<div className="col-xl-3 col-lg-4 mb-xl-0 mb-3">
													<div className="review-bx">
														<img className="me-3" src={data.image} alt="" />
														<div>
															<span className="text-primary fs-16">#EMP-00035</span>
															<h4 className="mt-1 fs-20 font-w600"><Link className="text-black" to={"./guest-detail"}>{data.title}</Link></h4>
															<span className="fs-12">Posted on 04/11/2021, 12:30 PM</span>
														</div>
													</div>
												</div>
												<div className="col-xl-6 col-xxl-6">
													<ul className="star-review mb-2">
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star"></i></li>
													</ul>
													<p className="mb-0">I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent</p>
												</div>
												<div className="col-xl-3 text-end col-xxl-2 action-btn">
													<Link to={"#"} className="review-icon rounded-circle btn-success me-3"><i className="far fa-check-circle"></i></Link>
													<Link to={"#"} className="review-icon rounded-circle btn-danger" ><i className="far fa-times-circle"></i></Link>
												</div>
											</div>	
										))}
									</Tab.Pane>
									<Tab.Pane eventKey="Deleted">
										{ReviewList3.map((data, index)=>(
											<div className="row align-items-center customer-review-list" key={index}>
												<div className="col-xl-3 col-lg-4 mb-xl-0 mb-3">
													<div className="review-bx">
														<img className="me-3" src={data.image} alt="" />
														<div>
															<span className="text-primary fs-16">#EMP-00045</span>
															<h4 className="mt-1 fs-20 font-w600"><Link className="text-black" to={"./guest-detail"}>{data.title}</Link></h4>
															<span className="fs-12">Posted on 15/11/2021, 11:30 AM</span>
														</div>
													</div>
												</div>
												<div className="col-xl-6 col-xxl-6">
													<ul className="star-review mb-2">
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star orange"></i></li>
														<li><i className="fas fa-star"></i></li>
													</ul>
													<p className="mb-0">I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent</p>
												</div>
												<div className="col-xl-3 text-end col-xxl-2 action-btn">
													<Link to={"#"} className="review-icon rounded-circle btn-success me-3"><i className="far fa-check-circle"></i></Link>
													<Link to={"#"} className="review-icon rounded-circle btn-danger"><i className="far fa-times-circle"></i></Link>
												</div>
											</div>	
										))}
									</Tab.Pane>
								</Tab.Content>	
							</div>
						</div>
					</div>
					<div className="col-xl-12">
						<div className="d-sm-flex d-block align-items-center justify-content-between">
							<h4 className="mb-sm-0 mb-3">Showing 1 to 5 of 5 entries</h4>
							<nav>
								<ul className="pagination">
									<li className="page-item page-indicator">
										<Link to={"#"} className="page-link">
											<i className="la la-angle-left"></i>
										</Link>
									</li>
									<li className="page-item active"><Link to={"#"} className="page-link">1</Link></li>
									<li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
									<li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
									<li className="page-item page-indicator">
										<Link to={"#"} className="page-link">
											<i className="la la-angle-right"></i>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>	
			</Tab.Container>	
		</>
	)
}
export default Reviews;