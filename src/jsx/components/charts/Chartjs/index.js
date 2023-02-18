import React, { useState } from "react";
import Webcam from "react-webcam";
import {
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  ButtonGroup,
  Modal,
} from "react-bootstrap";
import axios from "axios";
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// import './weblivecapture.css';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebLiveCapture = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const webcamRef = React.useRef(null);
  const [bell, setBell] = useState(true);
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [alert, setAlert] = useState("");
  // const [data,setData] = useState('');
  const [image, setImage] = useState("");
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log("Captured");
  }, [webcamRef]);
  console.log(bell);

  const fetchData = () => {
    const data = { img: name };
    console.log(data.img);
    return axios
      .post("https://home-sec.onrender.com/api", data)
      .then((response) => {
        // console.log(response.data)
        //setData(response.data)
      });
  };

  fetchData();

  const fetchUser = () => {
    // const data = "Known"
    return axios.get("https://home-sec.onrender.com/api").then((response) => {
      console.log(response.data);
      //  setData(response.data)
    });
  };

  fetchUser();

  const fetchAllow = () => {
    const data = { known: user };
    console.log(data.known);
    return axios
      .post("https://home-sec.onrender.com/api/known", data)
      .then((response) => {
        console.log(response.data);
        //setData(response.data)
      });
  };

  // fetchAllow();

  const fetchAlert = () => {
    const data = { alert: alert };
    console.log(data.alert);
    return axios
      .post("https://home-sec.onrender.com/api/alert", data)
      .then((response) => {
        console.log(response.data);
        //setData(response.data)
      });
  };

  fetchAlert();
  return (
    <React.Fragment>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={1000}
        width={1000}
        videoConstraints={videoConstraints}
      />

      {/* <Button className="me-2" variant="light" onClick={capture}>
                  Capture Photo
                </Button> */}

      {/* <Button className="me-2" variant="info" onClick={()=>{setBell(!bell)}}>
                  Bell
                </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>User Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              <span className="p-3"> Name: </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add your Name"
              />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/*       
        {bell ? (	<><Button className="me-2" variant="success" onClick={handleShow}>
                  Add Name
                  </Button>	

                
    </>):" "} */}

      <Button
        className="me-2"
        variant="info"
        onClick={() => {
          setUser("1");
        }}
      >
        Allow
      </Button>

      <Button
        className="me-2"
        variant="danger"
        onClick={() => {
          setAlert("1");
        }}
      >
        Alert
      </Button>
    </React.Fragment>
  );
};

export default WebLiveCapture;
