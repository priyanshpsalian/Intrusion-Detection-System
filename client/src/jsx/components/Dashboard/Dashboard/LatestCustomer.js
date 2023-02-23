import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import  {Dropdown} from 'react-bootstrap';
import PerfectScrollbar from "react-perfect-scrollbar";

///Images
import  avt1 from './../../../../images/avatar/1.jpg';
import  avt2 from './../../../../images/avatar/2.jpg';
import  avt3 from './../../../../images/avatar/3.jpg';
import  avt4 from './../../../../images/avatar/4.jpg';

const ReviewBlog = [
	{ image: avt1, title: 'Ali Muzair',},
	{ image: avt2, title: 'Keanu Repes',},
	{ image: avt3, title: 'Chintya Clara',},
	{ image: avt4, title: 'Keanu Repes',},
];

const LatestCustomer =()=>{
	const [data, setData] = useState(ReviewBlog);
	// This is load more function 
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
					<h4 className="card-title">Latest Customer Review</h4>
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
				<PerfectScrollbar className="card-body customer-review-bx p-0 dz-scroll loadmore-content" id="customerReviewContent">
					{data.map((item, index)=>(
						<div className="dz-review-bx" key={index}>
							<img className="dz-media me-4" src={item.image} alt="" />
							<div className="dz-info">
								<div className="dz-name mb-3">
									<div>
										<h6 className="title mb-1">{item.title}</h6>
										<span className="date text-black op8">Posted on 26/04/2020, 12:42 AM</span>
									</div>
									<ul className="star-review">
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star orange"></i></li>
										<li><i className="fas fa-star"></i></li>
									</ul>
								</div>
								<div className="dz-footer">
									<p className="text-black op8 mb-sm-0 mb-3 me-4">I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and  was very helpful and excellent</p>
									<Link to={"#"} className="review-icon rounded-circle btn-success me-3" ><i className="far fa-check-circle"></i></Link>
									<Link to={"#"} className="review-icon rounded-circle btn-danger" ><i className="far fa-times-circle"></i></Link>
								</div>
							</div>
						</div>
					))}
				</PerfectScrollbar>
				<div className="card-footer style-1 border-0 pt-0 text-center">
					<Link to={"#"} className="dz-load-more fas fa-chevron-down" onClick={() => onClick()}>{" "}
						{refresh && <i className="fas fa-sync"></i>}
					</Link>
				</div>
			</div>		
			
		</>
	)
} 
export default LatestCustomer;
