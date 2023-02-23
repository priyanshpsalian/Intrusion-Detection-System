import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";

const Inbox = () => {
  const [data, setData] = useState(
    document.querySelectorAll(".email-right-box .email-list .message")
  );
  const sort = 5;
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
    setData(document.querySelectorAll(".email-right-box .email-list .message"));
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
  const chackbox = document.querySelectorAll(".message input");
  const motherChackBox = document.querySelector("#checkbox1");
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
  return (
    <Fragment>
      <PageTitle activeMenu="Inbox" motherMenu="Email" pageContent="Email" />

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="email-left-box px-0 mb-3">
                <div className="p-0">
                  <Link
                    to="/email-compose"
                    className="btn btn-primary btn-block"
                  >
                    Compose
                  </Link>
                </div>
                <div className="mail-list rounded mt-4">
                  <Link to="/email-inbox" className="list-group-item active">
                    <i className="fa fa-inbox font-18 align-middle me-2"></i>
                    Inbox
                    <span className="badge badge-primary badge-sm float-end">
                      198
                    </span>
                  </Link>
                  <Link to="/email-inbox" className="list-group-item">
                    <i className="fa fa-paper-plane font-18 align-middle me-2"></i>
                    Sent
                  </Link>
                  <Link to="/email-inbox" className="list-group-item">
                    <i className="fa fa-star font-18 align-middle me-2"></i>
                    Important
                    <span className="badge badge-danger text-white badge-sm float-end">
                      47
                    </span>
                  </Link>
                  <Link to="/email-inbox" className="list-group-item">
                    <i className="mdi mdi-file-document-box font-18 align-middle me-2"></i>
                    Draft
                  </Link>
                  <Link to="/email-inbox" className="list-group-item">
                    <i className="fa fa-trash font-18 align-middle me-2"></i>
                    Trash
                  </Link>
                </div>
                
                <div className="mail-list rounded overflow-hidden mt-4">
					<div className="intro-title d-flex justify-content-between my-0">
					  <h5>Categories</h5>
					  <i className="icon-arrow-down" aria-hidden="true"></i>
					</div>
                  <Link to="/email-inbox" className="list-group-item">
                    <span className="icon-warning">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>
                    Work
                  </Link>
                  <Link to="/email-inbox" className="list-group-item">
                    <span className="icon-primary">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>
                    Private
                  </Link>
                  <Link to="/email-inbox" className="list-group-item">
                    <span className="icon-success">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>
                    Support
                  </Link>
                  <Link to="/email-inbox" className="list-group-item">
                    <span className="icon-dpink">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>
                    Social
                  </Link>
                </div>
              </div>
              <div className="email-right-box ms-0 ms-sm-4 ms-sm-0">
                <div role="toolbar" className="toolbar ms-1 ms-sm-0">
                  <div className="btn-group mb-1 me-1 ms-1">
                    <div className="form-check custom-checkbox">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox1"
                        onClick={() => chackboxFun("all")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox1"
                      ></label>
                    </div>
                  </div>
                  <div className="btn-group mb-1">
                    <button
                      className="btn btn-primary light px-3"
                      type="button"
                    >
                      <i className="ti-reload"></i>
                    </button>
                  </div>
                  <Dropdown className="btn-group mb-1">
                    <Dropdown.Toggle
                      aria-expanded="false"
                      data-toggle="dropdown"
                      className="btn btn-primary px-3 light dropdown-toggle ms-1"
                      type="button"
                    >
                      More <span className="caret"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item
                        to="/email-inbox"
                        className="dropdown-item"
                      >
                        Mark as Unread
                      </Dropdown.Item>
                      <Dropdown.Item
                        to="/email-inbox"
                        className="dropdown-item"
                      >
                        Add to Tasks
                      </Dropdown.Item>
                      <Dropdown.Item
                        to="/email-inbox"
                        className="dropdown-item"
                      >
                        Add Star
                      </Dropdown.Item>
                      <Dropdown.Item
                        to="/email-inbox"
                        className="dropdown-item"
                      >
                        Mute
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {/** Single Message */}
                <div className="email-list mt-3">
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox2"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Ingredia Nutrisha, A collection of textile samples lay
                          spread out on the table - Samsa was a travelling
                          salesman - and above it there hung a picture
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox3"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Almost unorthographic life One day however a small
                          line of blind text by the name of Lorem Ipsum decided
                          to leave for the far World of Grammar.
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox4"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Pointing has no control about the blind texts it is an
                          almost unorthographic life One day however a small
                          line of blind text by the name of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox5"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic life
                          One day however a small line of blind text by the name
                          of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox6"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Ingredia Nutrisha, A collection of textile samples lay
                          spread out on the table - Samsa was a travelling
                          salesman - and above it there hung a picture
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox7"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Almost unorthographic life One day however a small
                          line of blind text by the name of Lorem Ipsum decided
                          to leave for the far World of Grammar.
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox8"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox8"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Pointing has no control about the blind texts it is an
                          almost unorthographic life One day however a small
                          line of blind text by the name of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message unread">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox9"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox9"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic life
                          One day however a small line of blind text by the name
                          of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message unread">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox10"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox10"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Ingredia Nutrisha, A collection of textile samples lay
                          spread out on the table - Samsa was a travelling
                          salesman - and above it there hung a picture
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox11"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox11"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Almost unorthographic life One day however a small
                          line of blind text by the name of Lorem Ipsum decided
                          to leave for the far World of Grammar.
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox12"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox12"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Pointing has no control about the blind texts it is an
                          almost unorthographic life One day however a small
                          line of blind text by the name of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox13"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox13"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic life
                          One day however a small line of blind text by the name
                          of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox14"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox14"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Ingredia Nutrisha, A collection of textile samples lay
                          spread out on the table - Samsa was a travelling
                          salesman - and above it there hung a picture
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message unread">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox15"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox15"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Almost unorthographic life One day however a small
                          line of blind text by the name of Lorem Ipsum decided
                          to leave for the far World of Grammar.
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox16"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox16"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Pointing has no control about the blind texts it is an
                          almost unorthographic life One day however a small
                          line of blind text by the name of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox17"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox17"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic life
                          One day however a small line of blind text by the name
                          of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox18"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox18"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Ingredia Nutrisha, A collection of textile samples lay
                          spread out on the table - Samsa was a travelling
                          salesman - and above it there hung a picture
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox19"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox19"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Almost unorthographic life One day however a small
                          line of blind text by the name of Lorem Ipsum decided
                          to leave for the far World of Grammar.
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message unread">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox20"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox20"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Pointing has no control about the blind texts it is an
                          almost unorthographic life One day however a small
                          line of blind text by the name of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                  <div className="message">
                    <div>
                      <div className="d-flex message-single">
                        <div className="ps-1 align-self-center">
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onClick={() => chackboxFun()}
                              id="checkbox21"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox21"
                            />
                          </div>
                        </div>
                        <div className="ms-2">
                          <button className="border-0 bg-transparent align-middle p-0">
                            <i className="fa fa-star" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <Link to="email-read" className="col-mail col-mail-2">
                        <div className="subject">
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic life
                          One day however a small line of blind text by the name
                          of
                        </div>
                        <div className="date">11:49 am</div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-12 ps-3">
                    <nav>
                      <ul className="pagination pagination-gutter pagination-primary pagination-sm no-bg">
                        <li className="page-item page-indicator">
                          <Link
                            className="page-link"
                            to="/email-inbox"
                            onClick={() =>
                              activePag.current > 0 &&
                              onClick(activePag.current - 1)
                            }
                          >
                            <i className="la la-angle-left"></i>
                          </Link>
                        </li>
                        {paggination.map((number, i) => (
                          <li
                            key={i}
                            className={`page-item  ${
                              activePag.current === i ? "active" : ""
                            } `}
                            onClick={() => onClick(i)}
                          >
                            <Link className="page-link" to="/email-inbox">
                              {number}
                            </Link>
                          </li>
                        ))}

                        <li className="page-item page-indicator">
                          <Link
                            className="page-link"
                            to="/email-inbox"
                            onClick={() =>
                              activePag.current + 1 < paggination.length &&
                              onClick(activePag.current + 1)
                            }
                          >
                            <i className="la la-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inbox;
