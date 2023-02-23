import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import {DropdownBlog} from './../GuestList';

//Images
import pic3 from './../../../../images/avatar/3.jpg';
import pic4 from './../../../../images/avatar/4.jpg';
import pic6 from './../../../../images/avatar/6.jpg';

const BookedBlog = () =>{
	const [data, setData] = useState(
		document.querySelectorAll("#booked_wrapper tbody tr")
	);
	const sort = 4;
	const activePag = useRef(0);
	const [test, settest] = useState(0);

	// Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#booked_wrapper tbody tr"));
      //chackboxFun();
	}, [test]);

  
   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};

   
	const chackbox = document.querySelectorAll(".sorting_3 input");
	const motherChackBox = document.querySelector(".sorting_asc_3 input");
   // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
	const chackboxFun = (type) => {
      for (let i = 0; i < chackbox.length; i++) {
         const element = chackbox[i];
         if (type === "all") {
            if (motherChackBox.checked) {
               element.checked = true;
            } else {
               element.checked = false;
            }
         } else {
            if (!element.checked) {
               motherChackBox.checked = false;
               break;
            } else {
               motherChackBox.checked = true;
            }
         }
      }
    };
	return(
		<>
			<div className="table-responsive">
				<div id="booked_wrapper" className="dataTables_wrapper no-footer">
					<table
						id="example2"
						className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
					>
						<thead>
							<tr role="row">
								<th className="sorting_asc_3 bg-none" >
									<div className="form-check  style-1">
										<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
									</div>
								</th>
								<th className="sorting_asc_3">Guest</th>
								<th className="sorting">Date Order</th>
								<th className="sorting">Check In</th>
								<th className="sorting">Check Out</th>
								<th className="sorting">Special Request</th>
								<th className="sorting">Room Type</th>
								<th className="sorting">Status</th>
								<th className="sorting bg-none"></th>
							</tr>
						</thead>
						<tbody>
							<tr role="row" className="odd">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox22" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic3} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black">Roberto Cr.</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>
								<td><DropdownBlog /></td>
							</tr>
							<tr role="row" className="even">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox23" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic4} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black">Tonni Sblak</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>
								<td><DropdownBlog /></td>
							</tr>	
							<tr role="row" className="odd">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox25" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic6} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black" >Monalisa</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>	
								<td><DropdownBlog /></td>
							</tr>
							<tr role="row" className="even">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox26" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic4} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black" >Tonni Sblak</Link></h4>
											
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>
								<td><DropdownBlog /></td>
							</tr>
							<tr role="row" className="odd">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox25" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic6} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black">Monalisa</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>	
								<td><DropdownBlog /></td>
							</tr>
							<tr role="row" className="even">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox26" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic4} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black">Tonni Sblak</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>
								<td><DropdownBlog /></td>
							</tr>	
							<tr role="row" className="odd">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox28" required=""
										/>	
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic6} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black" >Monalisa</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>
								<td><DropdownBlog /></td>
							</tr>	
							<tr role="row" className="even">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox29" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic4} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black" >Tonni Sblak</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>
								<td><DropdownBlog /></td>
							</tr>
							<tr role="row" className="odd">
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox32" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="media-bx">
										<img className="me-3 rounded" src={pic6} alt="" />
										<div>
											<span className="text-primary">#GS-2234</span>
											<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black" >Monalisa</Link></h4>
										</div>
									</div>
								</td>
								<td>
									<div>
										<h5>Sunday, Oct 24th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 29th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td>
									<div>
										<h5>Oct 31th, 2020</h5>
										<span className="fs-14">08:29 AM</span>
									</div>
								</td>
								<td><Link to={"#"} className="btn-link disabled">No Request</Link></td>
								<td>
									<div>
										<h5>Queen A-2345</h5>
										<span className="fs-14">Room No. 0024</span>
									</div>
								</td>
								<td><span className="text-success">Booked</span></td>
								<td><DropdownBlog /></td>
							</tr>	
						</tbody>
					</table>
					<div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
						<div className="dataTables_info">
							Showing {activePag.current * sort + 1} to{" "}
							{data.length > (activePag.current + 1) * sort
								? (activePag.current + 1) * sort
								: data.length}{" "}
							of {data.length} entries
						</div>
						<div
							className="dataTables_paginate paging_simple_numbers"
							id="example2_paginate"
						>
							<Link
								className="paginate_button previous disabled"
								to="/guest-list"
								onClick={() =>
								   activePag.current > 0 &&
								   onClick(activePag.current - 1)
								}
							 >
								<i className="fa fa-angle-double-left" aria-hidden="true"></i>
							</Link>
							<span>
								{paggination.map((number, i) => (
								   <Link
									  key={i}
									  to="/guest-list"
									  className={`paginate_button  ${
										 activePag.current === i ? "current" : ""
									  } `}
									  onClick={() => onClick(i)}
								   >
									  {number}
								   </Link>
								))}
							</span>

							<Link
								className="paginate_button next"
								to="/guest-list"
								onClick={() =>
								   activePag.current + 1 < paggination.length &&
								   onClick(activePag.current + 1)
								}
							>
								<i className="fa fa-angle-double-right" aria-hidden="true"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default BookedBlog;