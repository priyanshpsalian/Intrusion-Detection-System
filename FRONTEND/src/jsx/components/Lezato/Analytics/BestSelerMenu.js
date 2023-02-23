import React from 'react';
import {Link} from 'react-router-dom';
import menu1 from './../../../../images/menu/menu1.jpg';
import menu2 from './../../../../images/menu/menu2.jpg';
import menu3 from './../../../../images/menu/menu3.jpg';

const CardBlog = [
	{image: menu1},
	{image: menu2},
	{image: menu3},
];

const BestSelerMenu = () =>{
	return(
		<>
			<div className="card">
				<div className="card-header border-0">
					<div>
						<h4 className="fs-20">Best Seler Menus</h4>
						<span>Lorem ipsum dolor</span>
					</div>
				</div>
				{CardBlog.map((item,index)=>(
					<div className="card-body border-bottom pt-0" key={index}>
						<div className="seler-menus mb-3">
							<img src={item.image} alt="" />
						</div>
						<div className="info">
							<h5 className="text-black mb-3"><Link to={"/ecom-product-grid"} className="text-black">Spinach with Roasted Crab</Link></h5>
							<div className="d-flex justify-content-between align-items-center">
								<h4 className="font-w600 mb-0 text-black">$6.73</h4>
								<div className="d-flex align-items-center">	
									<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20.8401 4.60896C20.3294 4.09796 19.7229 3.6926 19.0555 3.41604C18.388 3.13948 17.6726 2.99713 16.9501 2.99713C16.2276 2.99713 15.5122 3.13948 14.8448 3.41604C14.1773 3.6926 13.5709 4.09796 13.0601 4.60896L12.0001 5.66896L10.9401 4.60896C9.90843 3.57726 8.50915 2.99767 7.05012 2.99767C5.59109 2.99767 4.19181 3.57726 3.16012 4.60896C2.12843 5.64065 1.54883 7.03992 1.54883 8.49896C1.54883 9.95799 2.12843 11.3573 3.16012 12.389L4.22012 13.449L12.0001 21.229L19.7801 13.449L20.8401 12.389C21.3511 11.8782 21.7565 11.2718 22.033 10.6043C22.3096 9.93685 22.4519 9.22144 22.4519 8.49896C22.4519 7.77647 22.3096 7.06106 22.033 6.3936C21.7565 5.72614 21.3511 5.11971 20.8401 4.60896Z" fill="#FD683E"/>
									</svg>
									<span className="text-black mb-0">256k</span>
								</div>
								<div className="d-flex align-items-center">	
									<svg className="me-2" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect y="-0.000976562" width="2.95455" height="18" rx="1.47727" fill="#FD683E"/>
										<rect x="5.90918" y="4.90796" width="2.95455" height="13.0909" rx="1.47727" fill="#FD683E"/>
										<rect x="11.8184" y="12.2717" width="2.95455" height="5.72727" rx="1.47727" fill="#FD683E"/>
										<rect x="17.7275" y="2.45361" width="2.95455" height="15.5455" rx="1.47727" fill="#FD683E"/>
									</svg>
									<span className="text-black mb-0">256k</span>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="card-footer border-0 down-arrow py-1">
					<Link to={"#"}><i className="fas fa-chevron-down"></i></Link>
				</div>
			</div>
		</>
	)
}
export default BestSelerMenu;