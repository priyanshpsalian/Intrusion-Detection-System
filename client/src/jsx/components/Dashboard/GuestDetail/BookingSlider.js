import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

///Images

import hotel1 from './../../../../images/hotel/pic1.jpg';
import hotel2 from './../../../../images/hotel/pic2.jpg';
import hotel3 from './../../../../images/hotel/pic3.jpg';
import hotel4 from './../../../../images/hotel/pic4.jpg';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next fas fa-arrow-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
		<div className="owl-nav mt-0">
			<div className="owl-prev fas fa-arrow-left" onClick={onClick} style={{zIndex:1}}/>
		</div>
    );
} 

const contentBlog =[
	{image: hotel1},
	{image: hotel2},
	{image: hotel3},
	{image: hotel4},
]

const BookingSlider = () =>{
	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		center: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 767,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				},
			},	
			{
				breakpoint: 476,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Slider className="owl-carousel gallery-carousel owl-theme pb-3" {...settings}>
			{contentBlog.map((data,index)=>(
				<div className="items px-2" key={index}>
					<img src={data.image} alt=""   />
				</div>
			))}      
		</Slider>
	);
}
export default BookingSlider;