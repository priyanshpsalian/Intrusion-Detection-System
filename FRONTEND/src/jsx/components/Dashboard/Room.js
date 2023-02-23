import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Dropdown, Tab, Nav} from 'react-bootstrap';

//import pic11 from './../../../images/hotel/pic11.jpg';
import GuestCarousel from './Room/GuestCarousel';

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


const Room = () =>{
	const [data, setData] = useState(
		document.querySelectorAll("#room_wrapper tbody tr")
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
      setData(document.querySelectorAll("#room_wrapper tbody tr"));
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

   
	const chackbox = document.querySelectorAll(".sorting_7 input");
	const motherChackBox = document.querySelector(".sorting_asc_7 input");
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
								<Nav as="ul" className="nav nav-tabs" role="tablist">
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="All">All Room (457)</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Available">Available Room (234)</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Booked">Booked (125)</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
							<div className="table-search">	
								<div className="input-group search-area mb-xxl-0 mb-4">
									<input type="text" className="form-control" placeholder="Search here" />
									<span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
								</div>
							</div>	
							<Link to={"#"} className="btn btn-primary mb-xxl-0 mb-4"><i className="far fa-file-word me-2"></i>Generate Report</Link>
						</div>
						<Tab.Content>	
							<Tab.Pane eventKey="All">
								<div className="table-responsive">
									<div id="room_wrapper" className="dataTables_wrapper no-footer">
										<table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
											<thead>
												<tr role="row">
													<th className="sorting_asc_7 bg-none" >
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
														</div>
													</th>
													<th>Room Name</th>
													<th>Bed Type</th>
													<th>Room Floor</th>
													<th>Room Facility</th>
													<th>Status</th>
													<th className="bg-none"></th>
												</tr>
											</thead>
											<tbody>
												<tr role="row" className="odd">
													<td className="sorting_7">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox21" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link  className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Single Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="d-block">Booked</span>
															<span className="fs-14">Oct 24th - 26th</span>
														</div>
													</td>
													<td><DropdownBlog /></td>
												</tr>
												<tr className="even">
													<td className="sorting_7">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox22" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-danger d-block">Booked</span>
															<span className="fs-14 ">Oct 24th - 26th</span>
														</div>
													</td>
													<td><DropdownBlog /></td>
												</tr>
												<tr className="odd">
													<td className="sorting_7">  
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox23" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-danger d-block">Booked</span>
															<span className="fs-14 ">Oct 24th - 26th</span>
														</div>
													</td>
													<td><DropdownBlog /></td>
												</tr>
												<tr className="even">
													<td className="sorting_7">  
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox24" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-danger d-block">Booked</span>
															<span className="fs-14 ">Oct 24th - 26th</span>
														</div>
													</td>
													<td><DropdownBlog /></td>
												</tr>
												<tr className="odd">
													<td className="sorting_7">  
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox25" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3">
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-success">Available</span>
															
														</div>
													</td>
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
												className="dataTables_paginate paging_simple_numbers mb-0"
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
													<i className="fa fa-angle-double-left"></i> Previous
												</Link>
												<span>
													{paggination.map((number, i) => (
													   <Link key={i} to="/guest-list"
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
													Next <i className="fa fa-angle-double-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="Available">
								<div className="table-responsive">
									<div id="" className="dataTables_wrapper no-footer">
										<table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
											<thead>
												<tr role="row">
													<th className="sorting_asc_7 bg-none" >
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
														</div>
													</th>
													<th>Room Name</th>
													<th>Bed Type</th>
													<th>Room Floor</th>
													<th>Room Facility</th>
													<th>Status</th>
													<th className="bg-none"></th>
												</tr>
											</thead>
											<tbody>										
												<tr className="odd">
													<td className="sorting_7">  
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox25" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3">
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-success">Available</span>
															
														</div>
													</td>
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
												className="dataTables_paginate paging_simple_numbers mb-0"
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
													<i className="fa fa-angle-double-left"></i> Previous
												</Link>
												<span>
													{paggination.map((number, i) => (
													   <Link key={i} to="/guest-list"
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
													Next <i className="fa fa-angle-double-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>	
							</Tab.Pane>
							<Tab.Pane eventKey="Booked">
								<div className="table-responsive">
									<div id="" className="dataTables_wrapper no-footer">
										<table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
											<thead>
												<tr role="row">
													<th className="sorting_asc_7 bg-none" >
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
														</div>
													</th>
													<th>Room Name</th>
													<th>Bed Type</th>
													<th>Room Floor</th>
													<th>Room Facility</th>
													<th>Status</th>
													<th className="bg-none"></th>
												</tr>
											</thead>
											<tbody>
												<tr role="row" className="odd">
													<td className="sorting_7">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox21" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link  className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Single Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-danger d-block">Booked</span>
															<span className="fs-14">Oct 24th - 26th</span>
														</div>
													</td>
													<td><DropdownBlog /></td>
												</tr>
												<tr className="even">
													<td className="sorting_7">  
														<div className="form-check   style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox22" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-danger d-block">Booked</span>
															<span className="fs-14 ">Oct 24th - 26th</span>
														</div>
													</td>
													<td><DropdownBlog /></td>
												</tr>
												<tr className="odd">
													<td className="sorting_7">  
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox23" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-danger d-block">Booked</span>
															<span className="fs-14 ">Oct 24th - 26th</span>
														</div>
													</td>
													<td><DropdownBlog /></td>
												</tr>
												<tr className="even">
													<td className="sorting_7">  
														<div className="form-check  style-1">
															<input type="checkbox" onClick={() => chackboxFun()}
																className="form-check-input" id="customCheckBox24" required=""
															/>
														</div> 
													</td>
													<td>
														<div className="guest-bx">
															<div id="carouselExampleControls" className="carousel slide me-3" >
																<div className="carousel-inner">
																	<GuestCarousel />
																</div>	
															</div>	
															<div>
																<span className="text-primary">#0002</span>
																<h4 className="mb-0 mt-1"><Link className="text-black" to={"./guest-detail"}>Deluxe B-0004</Link></h4>
															</div>
														</div>	
													</td>
													<td>
														<div>
															<span className="fs-16">Double Bed</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">Floor G-05</span>
														</div>
													</td>
													<td>
														<div>
															<span className="fs-16">AC, Shower, Double Bed, Towel, Bathup,<br/> Coffee Set, LED TV, Wifi</span>
														</div>
													</td>
													<td>
														<div>
															<span className="text-danger d-block">Booked</span>
															<span className="fs-14 ">Oct 24th - 26th</span>
														</div>
													</td>
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
												className="dataTables_paginate paging_simple_numbers mb-0"
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
													<i className="fa fa-angle-double-left"></i> Previous
												</Link>
												<span>
													{paggination.map((number, i) => (
													   <Link key={i} to="/guest-list"
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
													Next <i className="fa fa-angle-double-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</Tab.Pane>
						</Tab.Content>
					</div>
				</div>
			</Tab.Container>				
		</>
	)
}
export default Room;