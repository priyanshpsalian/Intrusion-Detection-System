import React from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/avatar/pic1.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import LogoutPage from './Logout';

const Header = ({ onNote }) => {
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName; 
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
				<div
					className="dashboard_bar"
					style={{ textTransform: "capitalize" }}
				  >
					{finalName.join(" ").length === 0
					  ? "Dashboard"
					  : finalName.join(" ") === "dashboard dark"
					  ? "Dashboard"
					  : finalName.join(" ")}
				</div> 	
				
            </div>
            <ul className="navbar-nav header-right main-notification">
				<li className="nav-item">
					<div className="input-group search-area">
						<input type="text" className="form-control" placeholder="Search Here" />
						<span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
					</div>
				</li>
				<Dropdown as="li" className="nav-item dropdown notification_dropdown">
					<Dropdown.Toggle variant="" as="a"
					  className="nav-link bell bell-link i-false c-pointer ai-icon"
					  onClick={() => onNote()}
					>
						<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 5.16666C23.6667 2.5895 21.5772 0.5 19 0.5C15.1162 0.5 8.88387 0.5 5.00004 0.5C2.42287 0.5 0.333374 2.5895 0.333374 5.16666V20.3333C0.333374 20.8058 0.618046 21.2305 1.05321 21.4113C1.48955 21.5922 1.99121 21.4918 2.32487 21.1582C2.32487 21.1582 4.59287 18.8902 5.9672 17.517C6.4047 17.0795 6.99739 16.8333 7.61689 16.8333H19C21.5772 16.8333 23.6667 14.7438 23.6667 12.1667V5.16666ZM21.3334 5.16666C21.3334 3.87866 20.2892 2.83333 19 2.83333C15.1162 2.83333 8.88387 2.83333 5.00004 2.83333C3.71204 2.83333 2.66671 3.87866 2.66671 5.16666V17.517L4.31638 15.8673C5.19138 14.9923 6.37905 14.5 7.61689 14.5H19C20.2892 14.5 21.3334 13.4558 21.3334 12.1667V5.16666ZM6.16671 12.1667H15.5C16.144 12.1667 16.6667 11.644 16.6667 11C16.6667 10.356 16.144 9.83333 15.5 9.83333H6.16671C5.52271 9.83333 5.00004 10.356 5.00004 11C5.00004 11.644 5.52271 12.1667 6.16671 12.1667ZM6.16671 7.5H17.8334C18.4774 7.5 19 6.97733 19 6.33333C19 5.68933 18.4774 5.16666 17.8334 5.16666H6.16671C5.52271 5.16666 5.00004 5.68933 5.00004 6.33333C5.00004 6.97733 5.52271 7.5 6.16671 7.5Z" fill="#1362FC"/>
						</svg>
						<div className="pulse-css"></div>
					</Dropdown.Toggle>
				  </Dropdown>
				<Dropdown as="li" className="nav-item notification_dropdown ">
					<Dropdown.Toggle variant="" as="a" className="nav-link  ai-icon i-false c-pointer">
						<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8.83333 3.91738V1.50004C8.83333 0.856041 9.356 0.333374 10 0.333374C10.6428 0.333374 11.1667 0.856041 11.1667 1.50004V3.91738C12.9003 4.16704 14.5208 4.97204 15.7738 6.22504C17.3057 7.75687 18.1667 9.8347 18.1667 12V16.3914L19.1105 18.279C19.562 19.1832 19.5142 20.2565 18.9822 21.1164C18.4513 21.9762 17.5122 22.5 16.5018 22.5H11.1667C11.1667 23.144 10.6428 23.6667 10 23.6667C9.356 23.6667 8.83333 23.144 8.83333 22.5H3.49817C2.48667 22.5 1.54752 21.9762 1.01669 21.1164C0.484686 20.2565 0.436843 19.1832 0.889509 18.279L1.83333 16.3914V12C1.83333 9.8347 2.69319 7.75687 4.22502 6.22504C5.47919 4.97204 7.0985 4.16704 8.83333 3.91738ZM10 6.1667C8.45183 6.1667 6.96902 6.78154 5.87469 7.87587C4.78035 8.96904 4.16666 10.453 4.16666 12V16.6667C4.16666 16.8475 4.12351 17.026 4.04301 17.1882C4.04301 17.1882 3.52384 18.2265 2.9755 19.322C2.88567 19.5029 2.89501 19.7187 3.00117 19.8902C3.10734 20.0617 3.29517 20.1667 3.49817 20.1667H16.5018C16.7037 20.1667 16.8915 20.0617 16.9977 19.8902C17.1038 19.7187 17.1132 19.5029 17.0234 19.322C16.475 18.2265 15.9558 17.1882 15.9558 17.1882C15.8753 17.026 15.8333 16.8475 15.8333 16.6667V12C15.8333 10.453 15.2185 8.96904 14.1242 7.87587C13.0298 6.78154 11.547 6.1667 10 6.1667Z" fill="#1362FC"/>
						</svg>
						<div className="pulse-css"></div>
					</Dropdown.Toggle>
					<Dropdown.Menu align="right" className="mt-4 dropdown-menu dropdown-menu-end">
						<PerfectScrollbar className="widget-media dz-scroll p-3 height380">
							<ul className="timeline">
								<li>
									<div className="timeline-panel">
										<div className="media me-2">
											<img alt="images" width={50} src={avatar} />
										</div>
										<div className="media-body">
											<h6 className="mb-1">Dr sultads Send you Photo</h6>
											<small className="d-block">29 July 2020 - 02:26 PM</small>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media me-2 media-info">KG</div>
										<div className="media-body">
											<h6 className="mb-1">Resport created successfully</h6>
											<small className="d-block">29 July 2020 - 02:26 PM</small>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media me-2 media-success">
											<i className="fa fa-home" />
										</div>
										<div className="media-body">
											<h6 className="mb-1">Reminder : Treatment Time!</h6>
											<small className="d-block">29 July 2020 - 02:26 PM</small>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media me-2">
											<img alt="" width={50} src={avatar} />
										</div>
										<div className="media-body">
											<h6 className="mb-1">Dr sultads Send you Photo</h6>
											<small className="d-block">29 July 2020 - 02:26 PM</small>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media me-2 media-danger">KG</div>
										<div className="media-body">
											<h6 className="mb-1">Resport created successfully</h6>
											<small className="d-block">29 July 2020 - 02:26 PM</small>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media me-2 media-primary">
											<i className="fa fa-home" />
										</div>
										<div className="media-body">
											<h6 className="mb-1">Reminder : Treatment Time!</h6>
											<small className="d-block"> 29 July 2020 - 02:26 PM</small>
										</div>
									</div>
								</li>
							</ul>
							<div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
								<div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }}/>
							</div>
							<div className="ps__rail-y" style={{ top: 0, right: 0 }}>
								<div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }}/>
							</div>
						</PerfectScrollbar>
						<Link className="all-notification" to="#">
							See all notifications <i className="ti-arrow-right" />
						</Link>
					</Dropdown.Menu>
				</Dropdown>
			  
				<Dropdown as="li" className="nav-item dropdown notification_dropdown ">
					<Dropdown.Toggle className="nav-link i-false c-pointer ai-icon" variant="" as="a">
						<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M2.15608 11.6592C0.937571 10.4299 0.253296 8.76839 0.253296 7.03607C0.253296 5.29415 0.944772 3.62306 2.17648 2.39134C3.4082 1.15963 5.0793 0.46814 6.82122 0.46814C8.56315 0.46814 10.2342 1.15963 11.466 2.39134L11.9149 2.84033L12.3639 2.39134C13.5956 1.15963 15.2655 0.46814 17.0075 0.46814C18.7506 0.46814 20.4205 1.15963 21.6522 2.39134C22.8839 3.62306 23.5766 5.29415 23.5766 7.03607C23.5766 8.76839 22.8923 10.4299 21.6726 11.6592L12.7625 21.0939C12.5428 21.3268 12.2355 21.4589 11.9149 21.4589C11.5944 21.4589 11.2871 21.3268 11.0674 21.0939L2.15608 11.6592ZM11.9149 18.5945L19.9799 10.0553L20.0039 10.0313C20.7974 9.23659 21.244 8.15974 21.244 7.03607C21.244 5.9124 20.7974 4.83556 20.0039 4.04083C19.2092 3.2461 18.1311 2.79951 17.0075 2.79951C15.885 2.79951 14.807 3.2461 14.0122 4.04083L12.7397 5.31456C12.2835 5.76955 11.5452 5.76955 11.0902 5.31456L9.81646 4.04083C9.02293 3.2461 7.94489 2.79951 6.82122 2.79951C5.69756 2.79951 4.62071 3.2461 3.82598 4.04083C3.03125 4.83556 2.58586 5.9124 2.58586 7.03607C2.58586 8.15974 3.03125 9.23659 3.82598 10.0313C3.83438 10.0397 3.84158 10.0469 3.84879 10.0553L11.9149 18.5945Z" fill="#1362FC"/>
						</svg>
						<div className="pulse-css"></div>
					</Dropdown.Toggle>	
					<Dropdown.Menu align="right" className="mt-4 dropdown-menu dropdown-menu-end">
					  <PerfectScrollbar className="widget-timeline dz-scroll style-1 ps p-3 height370">
						<ul className="timeline">
						  <li>
							<div className="timeline-badge primary" />
							<Link
							  className="timeline-panel c-pointer text-muted"
							  to="#"
							>
							  <span>10 minutes ago</span>
							  <h6 className="mb-0">
								Youtube, a video-sharing website, goes live{" "}
								<strong className="text-primary">$500</strong>.
							  </h6>
							</Link>
						  </li>
						  <li>
							<div className="timeline-badge info"></div>
							<Link
							  className="timeline-panel c-pointer text-muted"
							  to="#"
							>
							  <span>20 minutes ago</span>
							  <h6 className="mb-0">
								New order placed{" "}
								<strong className="text-info">#XF-2356.</strong>
							  </h6>
							  <p className="mb-0">
								Quisque a consequat ante Sit amet magna at
								volutapt...
							  </p>
							</Link>
						  </li>
						  <li>
							<div className="timeline-badge danger"></div>
							<Link className="timeline-panel c-pointer text-muted" to="#">
								<span>30 minutes ago</span>
								<h6 className="mb-0">
									john just buy your product{" "}
									<strong className="text-warning">Sell $250</strong>
								</h6>
							</Link>
						  </li>
						  <li>
							<div className="timeline-badge success"></div>
							<Link  className="timeline-panel c-pointer text-muted" to="#">
								<span>15 minutes ago</span>
								<h6 className="mb-0">
									StumbleUpon is acquired by eBay.{" "}
								</h6>
							</Link>
						  </li>
							<li>
								<div className="timeline-badge warning"></div>
								<Link className="timeline-panel c-pointer text-muted" to="#">
									<span>20 minutes ago</span>
									<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
								</Link>
							</li>
							<li>
								<div className="timeline-badge dark"></div>
								<Link className="timeline-panel c-pointer text-muted" to="#">
									<span>20 minutes ago</span>
									<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
								</Link>
							</li>
						</ul>
						<div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
							<div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }}/>
						</div>
						<div className="ps__rail-y" style={{ top: 0, right: 0 }}>
							<div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }}/>
						</div>
					  </PerfectScrollbar>
					</Dropdown.Menu>
				</Dropdown> 
			  
				<Dropdown as="li" className="nav-item dropdown header-profile">
					<Dropdown.Toggle variant="" as="a" className="nav-link i-false c-pointer">
						<img src={profile} width={20} alt="" />
						<div className="header-info ms-3">
							<span>John Doe</span>
							<small>Superadmin</small>
						</div> 
					</Dropdown.Toggle>

					<Dropdown.Menu align="right" className="mt-3 dropdown-menu dropdown-menu-end">
					  <Link to="/app-profile" className="dropdown-item ai-icon">
						<svg
						  id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary"
						  width={18} height={18} viewBox="0 0 24 24" fill="none"
						  stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
						>
						  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
						  <circle cx={12} cy={7} r={4} />
						</svg>
						<span className="ms-2">Profile </span>
					  </Link>
					  <Link to="/email-inbox" className="dropdown-item ai-icon">
						<svg
						  id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success" width={18}
						  height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
						  strokeLinecap="round" strokeLinejoin="round"
						>
						  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
						  <polyline points="22,6 12,13 2,6" />
						</svg>
						<span className="ms-2">Inbox </span>
					  </Link>
					  <LogoutPage />
					</Dropdown.Menu>
				</Dropdown> 
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
