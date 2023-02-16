import React from 'react';
import {Link} from 'react-router-dom';
import cont1 from './../../../../images/contacts/c1.jpg';
import cont2 from './../../../../images/contacts/c2.jpg';
import cont3 from './../../../../images/contacts/c3.jpg';
import cont4 from './../../../../images/contacts/c4.jpg';

const LoyalCard = [
	{image: cont1, title: 'Benny Chagur',},
	{image: cont2, title: 'Chynita Bella',},
	{image: cont3, title: 'David Heree',},
	{image: cont4, title: 'Evan D. Mas',},
];

const LoyalCustomer = () =>{
	return(
		<>
			<div className="card customer-wrapper ">
				<div className="card-header border-0 pb-0">
					<div>	
						<h4 className="fs-20 mb-0">Loyal Customers</h4>
						<span>Lorem ipsum dolor</span>
					</div>	
				</div>
				<div className="card-body pb-0">
					{LoyalCard.map((item,index)=>(
						<div className="d-flex align-items-center mb-4" key={index}>
							<div className="recent-customer me-3">
								<img src={item.image} width="50" alt="" />
							</div>
							<div>
								<span className="c-name">{item.title}</span>
								<p className="font-w600 mb-0 text-primary">MEMBER</p>
							</div>
						</div>	
					))}
				</div>
				<div className="card-footer border-0 down-arrow p-0">
					<Link to={"#"}><i className="fas fa-chevron-down"></i></Link>
				</div>
			</div>
		</>
	)
}
export default LoyalCustomer;