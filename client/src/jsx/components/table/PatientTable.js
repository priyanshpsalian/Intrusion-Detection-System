import React, { useState, useRef, useEffect } from "react";
import {  Dropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
// import data from "./tableData.js";

const PatientTable = () => {
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
   // chackboxFun();
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
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Patient</h4>
        </div>
        <div className="card-body">
          <div className="w-100 table-responsive">
            <div id="patientTable_basic_table" className="dataTables_wrapper">
              <table
                id="example5"
                className="display dataTable no-footer w-100"
                style={{ minWidth: 845 }}
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting_asc"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-sort="ascending"
                      aria-label=": activate to sort column descending"
                      style={{ width: 32 }}
                    >
                      <div className="form-check custom-checkbox">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun("all")}
                          className="form-check-input"
                          id="checkAll"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkAll"
                        />
                      </div>
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient ID: activate to sort column ascending"
                      style={{ width: 73 }}
                    >
                      Patient ID
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Date Check in: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Date Check in
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Patient Name: activate to sort column ascending"
                      style={{ width: 100 }}
                    >
                      Patient Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Doctor Assgined: activate to sort column ascending"
                      style={{ width: 120 }}
                    >
                      Doctor Assgined
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Disease: activate to sort column ascending"
                      style={{ width: 62 }}
                    >
                      Disease
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Status: activate to sort column ascending"
                      style={{ width: 106 }}
                    >
                      Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Room no: activate to sort column ascending"
                      style={{ width: 66 }}
                    >
                      Room no
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Action: activate to sort column ascending"
                      style={{ width: 47 }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox2"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        />
                      </div>
                    </td>
                    <td>#P-00001</td>
                    <td>26/02/2020, 12:42 AM</td>
                    <td>Tiger Nixon</td>
                    <td>Dr. Cedric</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-danger">
                        <i className="fa fa-circle text-danger me-1" />
                        New Patient
                      </span>
                    </td>
                    <td>AB-001</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox3"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        />
                      </div>
                    </td>
                    <td>#P-00002</td>
                    <td>28/02/2020, 12:42 AM</td>
                    <td>Garrett Winters</td>
                    <td>Dr. Cedric</td>
                    <td>Sleep Problem</td>
                    <td>
                      <span className="badge light badge-warning">
                        <i className="fa fa-circle text-warning me-1" />
                        In Treatment
                      </span>
                    </td>
                    <td>AB-002</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox4"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox4"
                        />
                      </div>
                    </td>
                    <td>#P-00003</td>
                    <td>26/02/2020, 12:42 AM</td>
                    <td>Ashton Cox</td>
                    <td>Dr. Rhona</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-success">
                        <i className="fa fa-circle text-success me-1" />
                        Recovered
                      </span>
                    </td>
                    <td>AB-003</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox5"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox5"
                        />
                      </div>
                    </td>
                    <td>#P-00004</td>
                    <td>29/02/2020, 12:42 AM</td>
                    <td>Ashton Cox</td>
                    <td>Dr. Cedric</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-warning">
                        <i className="fa fa-circle text-warning me-1" />
                        In Treatment
                      </span>
                    </td>
                    <td>AB-004</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox6"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox6"
                        />
                      </div>
                    </td>
                    <td>#P-00005</td>
                    <td>28/02/2020, 12:42 AM</td>
                    <td>Ashton Cox</td>
                    <td>Dr. Cedric</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-warning">
                        <i className="fa fa-circle text-warning me-1" />
                        In Treatment
                      </span>
                    </td>
                    <td>AB-005</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox7"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox7"
                        />
                      </div>
                    </td>
                    <td>#P-00006</td>
                    <td>28/02/2020, 12:42 AM</td>
                    <td>Ashton Cox</td>
                    <td>Dr. Rhona</td>
                    <td>Sleep Problem</td>
                    <td>
                      <span className="badge light badge-warning">
                        <i className="fa fa-circle text-warning me-1" />
                        In Treatment
                      </span>
                    </td>
                    <td>AB-006</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox8"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox8"
                        />
                      </div>
                    </td>
                    <td>#P-00007</td>
                    <td>26/02/2020, 12:42 AM</td>
                    <td>Airi Satou</td>
                    <td>Dr. Rhona</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-danger">
                        <i className="fa fa-circle text-danger me-1" />
                        New Patient
                      </span>
                    </td>
                    <td>AB-007</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox9"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox9"
                        />
                      </div>
                    </td>
                    <td>#P-00008</td>
                    <td>29/02/2020, 12:42 AM</td>
                    <td>Airi Satou</td>
                    <td>Dr. Garrett </td>
                    <td>Sleep Problem</td>
                    <td>
                      <span className="badge light badge-warning">
                        <i className="fa fa-circle text-warning me-1" />
                        In Treatment
                      </span>
                    </td>
                    <td>AB-008</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox10"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox10"
                        />
                      </div>
                    </td>
                    <td>#P-00009</td>
                    <td>25/02/2020, 12:42 AM</td>
                    <td>Airi Satou</td>
                    <td>Dr. Rhona</td>
                    <td>Cold &amp; Flu</td>
                    <td>
                      <span className="badge light badge-danger">
                        <i className="fa fa-circle text-danger me-1" />
                        New Patient
                      </span>
                    </td>
                    <td>AB-009</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <div className="form-check custom-checkbox ">
                        <input
                          type="checkbox"
                          onClick={() => chackboxFun()}
                          className="form-check-input"
                          id="customCheckBox11"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox11"
                        />
                      </div>
                    </td>
                    <td>#P-00010</td>
                    <td>26/02/2020, 12:42 AM</td>
                    <td>Airi Satou</td>
                    <td>Dr. Rhona</td>
                    <td>Sleep Problem</td>
                    <td>
                      <span className="badge light badge-danger">
                        <i className="fa fa-circle text-danger me-1" />
                        New Patient
                      </span>
                    </td>
                    <td>AB-010</td>
                    <td>
                      <Dropdown className="dropdown ms-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="btn-link i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item>Accept Patient</Dropdown.Item>
                          <Dropdown.Item>Reject Order</Dropdown.Item>
                          <Dropdown.Item>View Details</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
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
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/table-datatable-basic"
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to="/table-datatable-basic"
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
                    to="/table-datatable-basic"
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
        </div>
      </div>
    </div>
  );
};

export default PatientTable;
