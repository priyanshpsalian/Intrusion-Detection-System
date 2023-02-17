import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import PageTitle from "../../../layouts/PageTitle";
import ApexLine3 from "../apexcharts/Line3";
import ApexRedialBar from "../apexcharts/RadialBar";
import ApexPie5 from "../apexcharts/Pie5"
import DonutChart from "../chartist/donut";
import BarChartNoPadding from "./BarChartNoPadding";
import NagetivePositive from "./PositiveNagative2";
import TinyLineChart from "./TinyLineChart";
import LegendEffectOpacity from "./LegendEffectOpacity";
// import { sensor } from "../../../../services/AuthService";
import { useEffect } from "react";

import axios from "axios";

function RechartJs() {
  const fetchData = () => {
      return axios.get("https://home-sec.onrender.com/api")
            .then((response) => console.log(response.data));
    }
  
    useEffect(() => {
      fetchData();
    }, [])
  
  // useEffect(()=>{
  //   // const data = fetchUser();
  //   console.log(fetch("https://home-sec.onrender.com/api"));
  // }, [])

  // const fetchUser = async () => {
  //   try {
  //   const response = await fetch("https://home-sec.onrender.com/api")
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  //   const data = await response.json();
  //   console.log(data);
 
  // }
 
  // useEffect(() => {
  //   const data = fetchUser();
  //   console.log(data);
  // })
  //  const fetchTasks = async () => {
  //   const res = await fetch('https://home-sec.onrender.com/api')
  //    const data = res.json();
  //    console.log("data00", data);
  //   return data
  // }
  

  return (
    <>
      <PageTitle motherMenu="Charts" activeMenu="ReChartJs" />
      <Row>
        <Col xl={6} lg={6}>

        <Card>
            <Card.Header> 
               <h4 className="card-title">Line</h4>
            </Card.Header>  
            <Card.Body>
              <ApexLine3 />
            </Card.Body>
          </Card>
          
          {/* <Card>
            <Card.Header>
				<h4 className="card-title">Bar</h4>
            </Card.Header>
            <Card.Body>
              <BarChartNoPadding />
            </Card.Body>
          </Card> */}
        </Col>
        <Col xl={6} lg={6}>

        <Card>
            <Card.Header> 
               <h4 className="card-title">Line</h4>
            </Card.Header>  
            <Card.Body>
              <ApexLine3 />
            </Card.Body>
          </Card>
          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Bar</h4>
            </Card.Header>
            <Card.Body>
              <NagetivePositive />
            </Card.Body>
          </Card> */}
        </Col>
        <Col xl={6} lg={6}>
          
        <Card>
            <Card.Header>
               <h4 className="card-title">Redial Bar</h4>
            </Card.Header>
            <Card.Body>
              <ApexRedialBar />
            </Card.Body>
          </Card>

          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <TinyLineChart />
            </Card.Body>
          </Card> */}
        </Col>
        <Col xl={6} lg={6}>

        <Card>
            <Card.Header>
               <h4 className="card-title">Pie</h4>
            </Card.Header>
            <Card.Body>
              <ApexPie5 />
            </Card.Body>
          </Card>
          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <LegendEffectOpacity />
            </Card.Body>
          </Card> */}
        </Col>

        <Col xl={6} lg={6}>

     <Card>
            <Card.Header>
              <h4 className="card-title">Bar</h4>
            </Card.Header>
            <Card.Body>
              <NagetivePositive />
            </Card.Body>
          </Card>
          {/* <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <LegendEffectOpacity />
            </Card.Body>
          </Card> */}
        </Col>

        <Col xl={6} lg={6}>

        <Card>
            <Card.Header>
               <h4 className="card-title">Donut</h4>
            </Card.Header>
            <Card.Body>
              <DonutChart />
            </Card.Body>
          </Card>
        
     {/* <Card>
       <Card.Header>
         <h4 className="card-title">Line</h4>
       </Card.Header>
       <Card.Body>
         <LegendEffectOpacity />
       </Card.Body>
     </Card> */}
   </Col>
       
      </Row>
    </>
  );
}

export default RechartJs;
