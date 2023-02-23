import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const InboxMessage = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#patientTable_basic_table tbody tr")
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
    setData(document.querySelectorAll("#patientTable_basic_table tbody tr"));
    chackboxFun();
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
    <div className="email-list mt-3">
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox2"
                />
                <label className="custom-control-label" htmlFor="checkbox2" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Ingredia Nutrisha, A collection of textile samples lay spread out
              on the table - Samsa was a travelling salesman - and above it
              there hung a picture
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox3"
                />
                <label className="custom-control-label" htmlFor="checkbox3" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Almost unorthographic life One day however a small line of blind
              text by the name of Lorem Ipsum decided to leave for the far World
              of Grammar.
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox4"
                />
                <label className="custom-control-label" htmlFor="checkbox4" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Pointing has no control about the blind texts it is an almost
              unorthographic life One day however a small line of blind text by
              the name of
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox5"
                />
                <label className="custom-control-label" htmlFor="checkbox5" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
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
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox6"
                />
                <label className="custom-control-label" htmlFor="checkbox6" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Ingredia Nutrisha, A collection of textile samples lay spread out
              on the table - Samsa was a travelling salesman - and above it
              there hung a picture
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox7"
                />
                <label className="custom-control-label" htmlFor="checkbox7" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Almost unorthographic life One day however a small line of blind
              text by the name of Lorem Ipsum decided to leave for the far World
              of Grammar.
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox8"
                />
                <label className="custom-control-label" htmlFor="checkbox8" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Pointing has no control about the blind texts it is an almost
              unorthographic life One day however a small line of blind text by
              the name of
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message unread">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox9"
                />
                <label className="custom-control-label" htmlFor="checkbox9" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
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
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox10"
                />
                <label className="custom-control-label" htmlFor="checkbox10" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Ingredia Nutrisha, A collection of textile samples lay spread out
              on the table - Samsa was a travelling salesman - and above it
              there hung a picture
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox11"
                />
                <label className="custom-control-label" htmlFor="checkbox11" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Almost unorthographic life One day however a small line of blind
              text by the name of Lorem Ipsum decided to leave for the far World
              of Grammar.
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox12"
                />
                <label className="custom-control-label" htmlFor="checkbox12" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Pointing has no control about the blind texts it is an almost
              unorthographic life One day however a small line of blind text by
              the name of
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox13"
                />
                <label className="custom-control-label" htmlFor="checkbox13" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
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
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox14"
                />
                <label className="custom-control-label" htmlFor="checkbox14" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Ingredia Nutrisha, A collection of textile samples lay spread out
              on the table - Samsa was a travelling salesman - and above it
              there hung a picture
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message unread">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox15"
                />
                <label className="custom-control-label" htmlFor="checkbox15" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Almost unorthographic life One day however a small line of blind
              text by the name of Lorem Ipsum decided to leave for the far World
              of Grammar.
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox16"
                />
                <label className="custom-control-label" htmlFor="checkbox16" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Pointing has no control about the blind texts it is an almost
              unorthographic life One day however a small line of blind text by
              the name of
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox17"
                />
                <label className="custom-control-label" htmlFor="checkbox17" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to={"/email-read"} className="col-mail col-mail-2">
            <div className="subject">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
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
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox18"
                />
                <label className="custom-control-label" htmlFor="checkbox18" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Ingredia Nutrisha, A collection of textile samples lay spread out
              on the table - Samsa was a travelling salesman - and above it
              there hung a picture
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox19"
                />
                <label className="custom-control-label" htmlFor="checkbox19" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Almost unorthographic life One day however a small line of blind
              text by the name of Lorem Ipsum decided to leave for the far World
              of Grammar.
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message unread">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox20"
                />
                <label className="custom-control-label" htmlFor="checkbox20" />
              </div>
            </div>
            <div className="ms-2">
              <button className="border-0 bg-transparent align-middle p-0">
                <i className="fa fa-star" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Link to="/email-read" className="col-mail col-mail-2">
            <div className="subject">
              Pointing has no control about the blind texts it is an almost
              unorthographic life One day however a small line of blind text by
              the name of
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
      <div className="message">
        <div>
          <div className="d-flex message-single">
            <div className="ps-1 align-self-center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox21"
                />
                <label className="custom-control-label" htmlFor="checkbox21" />
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
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of
            </div>
            <div className="date">11:49 am</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InboxMessage;
