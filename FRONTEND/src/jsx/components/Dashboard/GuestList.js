import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Dropdown, Tab, Nav } from "react-bootstrap";

///Import
import PendingBlog from './Guest/PendingBlog';
import BookedBlog from './Guest/BookedBlog';
import CanceledBlog from './Guest/CanceledBlog';
import RefundBlog from './Guest/RefundBlog';

//Images
import pic1 from './../../../images/avatar/1.jpg';
import pic2 from './../../../images/avatar/2.jpg';
import pic3 from './../../../images/avatar/3.jpg';
import pic4 from './../../../images/avatar/4.jpg';
import pic5 from './../../../images/avatar/5.jpg';
import pic6 from './../../../images/avatar/6.jpg';

const DropdownBlog = () =>{
	return(
		<>
			<Dropdown className="dropdown">
				<Dropdown.Toggle as="div" className="btn-link i-false" data-bs-toggle="dropdown" aria-expanded="false">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-menu">
					<Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
					<Dropdown.Item className="dropdown-item">Delete</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}

const GuestList = () =>{
	const [data, setData] = useState(
		document.querySelectorAll("#example2_wrapper tbody tr")
	);
	const sort = 10;
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
      setData(document.querySelectorAll("#example2_wrapper tbody tr"));
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

   
	const chackbox = document.querySelectorAll(".sorting_1 input");
	const motherChackBox = document.querySelector(".sorting_asc input");
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
			<Tab.Container defaultActiveKey="All">
				<div className="row">
					<div className="col-xl-12">
						<div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
							<div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
								<Nav as="ul" className="nav nav-tabs">
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="All">All Guest (12)</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Pending">Pending</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Booked">Booked</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Canceled">Canceled</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Refund">Refund</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
							<div className="table-search">
								<div className="input-group search-area mb-xxl-0 mb-4">
									<input type="text" className="form-control" placeholder="Search here" />
									<span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
								</div>
							</div>
							<Link to={"#"} className="btn btn-primary mb-xxl-0 mb-4 "><i className="far fa-file-word me-2"></i>Generate Report</Link>
						</div>
						<Tab.Content>
				
							<Tab.Pane eventKey="All">
								<div className="table-responsive">
									<div id="example2_wrapper" className="dataTables_wrapper no-footer">
										<table
											id="example2"
											className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
										>
											<thead>
												<tr role="row">
													<th className="sorting_asc bg-none" >
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
														</div>
													</th>
													<th className="sorting_asc">Guest</th>
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
													<td className="sorting_1">
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun()} className="form-check-input"
																id="customCheckBox2" required=""
															/>
														</div>
													</td>
													<td>
														<div className="media-bx">
															<img className="me-3 rounded" src={pic1} alt="" />
															<div>
																<span className="text-primary">#GS-2234</span>
																<h4 className="mb-0 mt-1">
																	<Link to={"./guest-detail"} className="text-black">Yonna</Link>
																</h4>
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
													<td><Link to={"#"} className="btn-link">View Notes</Link></td>
													<td>
														<div>
															<h5>Queen A-2345</h5>
															<span className="fs-14">Room No. 0024</span>
														</div>
													</td>
													<td><span className="text-danger">Refund</span></td>
													<td><DropdownBlog /></td>
												</tr>
												<tr role="row" className="even">
													<td className="sorting_1">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox21" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="media-bx">
															<img className="me-3 rounded" src={pic2} alt="" />
															<div>
																<span className="text-primary">#GS-2234</span>
																<h4 className="mb-0 mt-1">
																	<Link className="text-black" to={"./guest-detail"}>Mr. John Kipli</Link>
																</h4>
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
													<td><Link to={"#"} className="btn-link">View Notes</Link></td>
													<td>
														<div>
															<h5>Queen A-2345</h5>
															<span className="fs-14">Room No. 0024</span>
														</div>
													</td>
													<td><span className="text-dark">Canceled</span></td>
													<td><DropdownBlog /></td>
												</tr>
												<tr role="row" className="odd">
													<td className="sorting_1">  
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
																<h4 className="mb-0 mt-1">
																	<Link className="text-black" to={"./guest-detail"}>Roberto Cr.</Link>
																</h4>
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
													<td className="sorting_1">  
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
																<h4 className="mb-0 mt-1">
																	<Link className="text-black" to={"./guest-detail"}>Tonni Sblak</Link>
																</h4>
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
													<td className="sorting_1">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox24" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="media-bx">
															<img className="me-3 rounded" src={pic5} alt="" />
															<div>
																<span className="text-primary">#GS-2234</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Keanu Repes</Link></h4>
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
													<td><Link to={"#"} className="btn-link">View Notes</Link></td>
													<td>
														<div>
															<h5>Queen A-2345</h5>
															<span className="fs-14">Room No. 0024</span>
														</div>
													</td>
													<td><span className="text-warning">Pending</span></td>
													<td><DropdownBlog /></td>
												</tr>
												<tr role="row" className="even">
													<td className="sorting_1">  
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
																<h4 className="mb-0 mt-1">
																	<Link className="text-black" 
																	to={"./guest-detail"}>Monalisa</Link>
																</h4>
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
													<td className="sorting_1">  
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
												<tr role="row" className="even">
													<td className="sorting_1">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox27" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="media-bx">
															<img className="me-3 rounded" src={pic5} alt="" />
															<div>
																<span className="text-primary">#GS-2234</span>
																<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black" >Keanu Repes</Link></h4>
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
													<td><Link to={"#"} className="btn-link">View Notes</Link></td>
													<td>
														<div>
															<h5>Queen A-2345</h5>
															<span className="fs-14">Room No. 0024</span>
														</div>
													</td>
													<td><span className="text-warning">Pending</span></td>
													<td><DropdownBlog /></td>
												</tr>
												<tr role="row" className="odd">
													<td className="sorting_1">  
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
													<td className="sorting_1">  
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
												<tr role="row" className="even">
													<td className="sorting_1">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox31" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="media-bx">
															<img className="me-3 rounded" src={pic5} alt="" />
															<div>
																<span className="text-primary">#GS-2234</span>
																<h4 className="mb-0 mt-1"><Link to={"./guest-detail"} className="text-black">Keanu Repes</Link></h4>
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
													<td><Link to={"#"} className="btn-link">View Notes</Link></td>
													<td>
														<div>
															<h5>Queen A-2345</h5>
															<span className="fs-14">Room No. 0024</span>
														</div>
													</td>
													<td><span className="text-warning">Pending</span></td>
													<td><DropdownBlog /></td>
												</tr>
												<tr role="row" className="odd">
													<td className="sorting_1">  
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
							</Tab.Pane>
							<Tab.Pane eventKey="Pending">
								<PendingBlog />	
							</Tab.Pane>
							<Tab.Pane eventKey="Booked">
								<BookedBlog />
							</Tab.Pane>
							<Tab.Pane eventKey="Canceled">
								<CanceledBlog />
							</Tab.Pane>
							<Tab.Pane eventKey="Refund">
								<RefundBlog />
							</Tab.Pane>
							
						</Tab.Content>
					</div>
				</div>	
			</Tab.Container>		
		</>
	)
}
export {DropdownBlog};
export default GuestList;