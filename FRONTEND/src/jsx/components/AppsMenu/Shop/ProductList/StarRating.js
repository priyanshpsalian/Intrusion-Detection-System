import React from "react";
import ReactStarRating from "react-star-ratings-component";
import swal from "sweetalert";	
//import "./styles.css";

function StarRating() {
  return (
    <ReactStarRating
		numberOfStar={5}
		numberOfSelectedStar={1}
		colorFilledStar="#FF912C"
		colorEmptyStar="#ccc"
		starSize="20px"
		spaceBetweenStar="10px"
		disableOnSelect={false}
		onSelectStar={val => {
			switch(val) {
				case 1:
				return swal("Thank you for the 1 star rating.");
				case 2:
				return swal("Thank you for the 2 star rating.");
				case 3:
				return swal("Thank you for the 3 star rating.");
				case 4:
				return swal("Thank you for the 4 star rating.");
				case 5:
				return swal("Thank you for the 5 star rating.");
				default:
				 swal("Thank you for the 1 star rating.");
			}
		}}
	  
    />
  );
}
export default StarRating;