import React from 'react';
import {Link} from 'react-router-dom';

const TrandingBlog = () =>{
	return(
		<>
			<div className="card-body">
				<div className="progress default-progress">
					<div className="progress-bar bg-gradient-1 progress-animated" style={{width: "45%", height:"11px"}} role="progressbar">
						<span className="sr-only">45% Complete</span>
					</div>
				</div>
				<div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
					<span className="fs-16 text-primary font-w600">#pizza</span>
					<span className="fs-14"><span className="text-black pe-2"></span>452 times</span>
				</div>
				<div className="progress default-progress">
					<div className="progress-bar bg-gradient-1 progress-animated" style={{width: "30%", height:"11px"}} role="progressbar">
						<span className="sr-only">30% Complete</span>
					</div>
				</div>
				<div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
					<span className="fs-16 text-primary font-w600">#breakfast</span>
					<span className="fs-14"><span className="text-black pe-2"></span>97 times</span>
				</div>
				<div className="progress default-progress">
					<div className="progress-bar bg-gradient-1 progress-animated" style={{width: "45%", height:"11px"}} role="progressbar">
						<span className="sr-only">45% Complete</span>
					</div>
				</div>
				<div className="d-flex align-items-end mt-2 pb-4 justify-content-between">
					<span className="fs-16 text-primary font-w600">#coffee</span>
					<span className="fs-14"><span className="text-black pe-2"></span>61 times</span>
				</div>
				<div>
					<h4 className="fs-20 mb-3">Others tag</h4>
					<div>
						<Link to={"#"} className=" btn btn-outline-primary btn-rounded me-2 mb-3 btn-sm">
							#japanessefood
						</Link>
						<Link to={"#"} className=" btn btn-outline-primary btn-rounded mb-3  btn-sm">
							#design
						</Link>
						<Link to={"#"} className=" btn btn-outline-primary btn-rounded me-2 mb-3 btn-sm">
							#projectmanagement
						</Link>
						<Link to={"#"} className=" btn btn-outline-primary btn-rounded btn-sm mb-3">16+</Link>
					</div>
				</div>
			</div>
		</>
	)
}
export default TrandingBlog; 