import React from 'react';
import {Carousel} from 'react-bootstrap';

import pic11 from './../../../../images/hotel/pic11.jpg';
import pic22 from './../../../../images/hotel/pic22.jpg';
import pic33 from './../../../../images/hotel/pic33.jpg';

const GuestCarousel = () =>{
	return(
		<Carousel 
			prevIcon={<span aria-hidden="true" className="fas fa-chevron-left text-black" />}
			nextIcon={<span aria-hidden="true" className="fas fa-chevron-right text-black" />}
		>				
			<Carousel.Item>
				<img src={pic11} className="d-block w-100" alt="..." />
			</Carousel.Item>
			<Carousel.Item>
				<img src={pic22} className="d-block w-100" alt="..." />	
			</Carousel.Item>
			<Carousel.Item>
				<img src={pic33} className="d-block w-100" alt="..." />
			</Carousel.Item>		
		</Carousel>
			
	)
}

export default GuestCarousel;