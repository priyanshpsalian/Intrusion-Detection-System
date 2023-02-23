import React from 'react';
import {Link} from 'react-router-dom';

import menu5 from './../../../../images/menu/menu5.jpg';
import menu6 from './../../../../images/menu/menu6.jpg';
import menu7 from './../../../../images/menu/menu7.jpg';
import menu8 from './../../../../images/menu/menu8.jpg';

const TrendingBlog = [
	{ image: menu5, title:'Watermelon juice with ice',},
	{ image: menu6, title:'Chicken curry special with cucumber',},
	{ image: menu7, title:'Italiano pizza with garlic',},
	{ image: menu8, title:'Tuna soup spinach with himalaya salt',},
	{ image: menu5, title:'Medium Spicy Spagethi Italiano',},
];

const DailyTrending = () =>{
	return(
		<>
			<div className="card h-auto">
				<div className="card-header border-0">
					<div>
						<h4 className="fs-20">Daily Trending Menus</h4>
						<span>Lorem ipsum dolor</span>
					</div>
				</div>
				{TrendingBlog.map((item,index)=>(
					<div className="card-body d-flex border-bottom py-3" key={index}>
						<div className="trending-menu me-3">
							<img src={item.image} alt=" " /> 
						</div>
						<div className="media-body">
							<h5 className="mb-3"><Link to={"/ecom-product-grid"} className="text-black">{item.title}</Link></h5>
							<div className="d-flex justify-content-between align-items-center">
								<span>Order 67x</span>
								<span className="fs-18 font-w600 text-black">$4.8</span>
							</div>
						</div>
					</div>	
				))}
			</div>
		</>
	)
}
export default DailyTrending;