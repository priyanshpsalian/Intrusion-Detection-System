import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import PerfectScrollbar from "react-perfect-scrollbar";

//Images
import cust1 from './../../../../images/contacts/c1.jpg';
import cust2 from './../../../../images/contacts/c2.jpg';
import cust3 from './../../../../images/contacts/c3.jpg';
import cust4 from './../../../../images/contacts/c4.jpg';
import cust5 from './../../../../images/contacts/c5.jpg';
import cust6 from './../../../../images/contacts/c6.jpg';

const recentBlog = [
	{image: cust1, title: 'Benny Chagur', subtitle:'MEMBER',  },
	{image: cust2, title: 'Chynita Bella', subtitle:'Regular Customer', },
	{image: cust3, title: 'David Heree', subtitle:'MEMBER', },
	{image: cust4, title: 'Evan D. Mas', subtitle:'Regular Customer', },
	{image: cust5, title: 'Supratman', subtitle:'MEMBER', },
	{image: cust6, title: 'John Kusnaidi', subtitle:'Regular Customer', },
];

const CustomersBlog = () =>{
	// This is load more function 
	const [data, setData] = useState(recentBlog);
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
			<div className="card customer-wrapper">
				<div className="card-header border-0">
					<div>	
						<h4 className="fs-20 mb-1">Customers</h4>
						<span>Lorem ipsum dolor</span>
					</div>	
					<div className="add-btn">
						<Link to={"#"}><i className="fas fa-plus"></i></Link>
					</div>
				</div>
				<PerfectScrollbar className="dz-scroll">
					<div className="card-body height400 loadmore-content pb-0 pt-0" id="CustomerListContent">
						{data.map((data, index)=>(
							<div className="d-flex align-items-center mb-4" key={index}>
								<div className="recent-customer me-3">
									<img src={data.image} width="50" alt="" />
								</div>
								<div>
									<span className="c-name">{data.title}</span>
									<p className="font-w600 mb-0 text-primary">{data.subtitle}</p>
								</div>
							</div>	
						))}
					</div>
				</PerfectScrollbar>	
				<div className="card-footer border-0 down-arrow pb-0">
					<Link to={"#"} className="dz-load-more fas fa-chevron-down" onClick={() => onClick()} >{" "}
						{refresh && <i className="fas fa-sync-alt ms-1"></i>}
					</Link>
				</div>
			</div>
		</>
	)
}

export default CustomersBlog;