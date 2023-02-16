import React from "react";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import PageTitle from "../../../layouts/PageTitle";
import BarChart1 from "./bar1";
import BarChart5 from "./bar5";
import BarChart6 from "./bar6";
import LineChart1 from "./line1";
import DualLine from "./dualLine";
import BasicArea from "./basicArea";
import GradientArea from "./gradinetArea";
//import DualArea from "./dualArea";
import Radar from "./radar";
import PolarChart from "./polar";
//import DualLine2 from "./dualLine2";

import ChartPie from "./pie";

function ChartChartjs() {
  return (
    <>
      <PageTitle motherMenu="Charts" activeMenu="ChartJs" />
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bar chart</h4>
            </Card.Header>
            <Card.Body>
              <BarChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bar chart</h4>
            </Card.Header>
            <Card.Body>
              <BarChart5 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bar chart</h4>
            </Card.Header>
            <Card.Body>
              <BarChart6 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
				<h4 className="card-title">Line chart</h4>
            </Card.Header>
            <Card.Body>
              <LineChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Dual Line chart</h4>
            </Card.Header>
            <Card.Body>
              <DualLine />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Basic Area Chart</h4>
            </Card.Header>
            <Card.Body>
              <BasicArea />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
               <h4 className="card-title">Gradinet Area Chart</h4>
            </Card.Header>
            <Card.Body>
              <GradientArea />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
               <h4 className="card-title">Radar Chart</h4>
            </Card.Header>
            <Card.Body>
              <Radar />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
               <h4 className="card-title">Pie</h4>
            </Card.Header>
            <Card.Body>
              <ChartPie />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
                <h4 className="card-title">Polar Chart</h4>
            </Card.Header>
            <Card.Body>
              <PolarChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ChartChartjs;
