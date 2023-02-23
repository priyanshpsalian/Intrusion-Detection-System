import React from 'react';
import {Link} from 'react-router-dom';
//Images
import MenuImg1 from './../../../../images/menu/pic1.jpg';
import MenuImg2 from './../../../../images/menu/pic2.jpg';
import MenuImg3 from './../../../../images/menu/pic3.jpg';
import MenuImg4 from './../../../../images/menu/pic4.jpg';

const productBlog = [
	{Pid:'#1', title: 'Medium Spicy Spagethi Italiano', Image: MenuImg1 },
	{Pid:'#2', title: 'Watermelon juice with ice', Image: MenuImg2 },
	{Pid:'#3', title: 'Chicken curry special with cucumber', Image: MenuImg3 },
	{Pid:'#4', title: 'Italiano Pizza With Garlic', Image: MenuImg4 },
	{Pid:'#5', title: 'Tuna Soup spinach with himalaya salt', Image: MenuImg1 },
];

const DailyTrending = () =>{
	return(
		<>
			<div className="card-body pb-0">
				{productBlog.map((item,ind)=>(
					<div className="d-flex pb-3 mb-3 tr-row align-items-center border-bottom" key={ind}>
						<span className="num">{item.Pid}</span>
						<div className="me-auto pe-3">
							<Link to={"/ecom-product-grid"}><h2 className="text-black fs-14 font-w600">{item.title}</h2></Link>
							<span className="text-black font-w600 d-inline-block me-3">$5.6 </span> <span className="fs-14">Order 89x</span>
						</div>
						<img src={item.Image} alt="" />
					</div>	
				))}	
			</div>	
		</>
	)
}
export default DailyTrending; 