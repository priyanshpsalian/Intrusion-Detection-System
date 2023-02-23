import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Accordion = () => {
  const [name, setName] = useState("");
  const [get, setGet] = useState("");
  const [dat, setDat] = useState([]);

  const fetchUser =async () => {
      // const data = "Known"
      // const [data,setData]=useState()
       axios.get("http://localhost:5000/predict_person")
        .then((response) => {
          const data = response.data;
          setDat(response.data)
          console.log(dat, "state");
          console.log(response.data, "This");
          
        });
        // useEffect(() => {
        //   axios.get("http://localhost:5000/predict_person")
        //   .then(response=> {
        //   const data = response.data;
    
        //   console.log(data, "ours");
        //   })
        // }, [])
        
      }
      // const response = await 
      // fetch("http://localhost:5000/predict_person", {
      //   method: "GET",
      //   mode: "no-cors",

      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     // Authorization: `Bearer: ${token}`,
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((json) => {
      //     console.log(json);
      //     // this.setState({
      //     //   items: json,
      //     //   DataisLoaded: true,
      //     // });
      //   });
      // let data= await fetch("http://localhost:5000/predict_person", {
      //     method: "GET",
      //     mode: "no-cors",

      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       // Authorization: `Bearer: ${token}`,
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   console.log(data);
      // return data;


    // console.log(response.text,"response");
    


    // const da = fetchUser();
    // fetchUser();

  return (
    <div>
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
      </form>
      <h1>{dat[0]} here</h1>
      <Button className="me-2" variant="success">
        Add Name
      </Button>

      <Button className="me-2" variant="success" onClick={fetchUser}>
        Predict
      </Button>
    </div>
  );
};


export default Accordion;
