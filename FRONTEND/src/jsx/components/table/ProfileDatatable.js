import React, { Fragment,  useRef } from "react";
// import { Table, Pagination } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./tableData.js";

const ProfileDatatable = () => {
  const sort = 3;
  let paggination = Array(Math.ceil(data.profileTable.data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const activePag = useRef(0);
  const jobData = useRef(
    data.profileTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
  );
  //const [demo, setdemo] = useState();
  const onClick = (i) => {
    activePag.current = i;

    jobData.current = data.profileTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    );
    /* setdemo(
      data.profileTable.data.slice(
        activePag.current * sort,
        (activePag.current + 1) * sort
      )
    ); */
  };
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Profile Datatable</h4>
        </div>
        <div className="card-body">
          <div className="w-100 table-responsive">
            <div id="example_wrapper" className="dataTables_wrapper">
              <table id="example" className="display w-100 dataTable">
                <thead>
                  <tr role="row">
                    {data.profileTable.columns.map((d, i) => (
                      <th key={i}>{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {jobData.current.map((d, i) => (
                    <tr key={i}>
                      {d.map((da, i) => (
                        <Fragment key={i}>
                          <td>
                            {i === 0 ? (
                              <img
                                className="rounded-circle"
                                width="35"
                                src={da}
                                alt=""
                              />
                            ) : (
                              <Fragment>
                                {da}
                                {i === 8 && (
                                  <div className="d-flex">
                                    <Link
                                      to="#"
                                      className="btn btn-primary shadow btn-xs sharp me-1"
                                    >
                                      <i className="fas fa-pen"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </Link>
                                  </div>
                                )}
                              </Fragment>
                            )}
                          </td>
                        </Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr role="row">
                    {data.profileTable.columns.map((d, i) => (
                      <th key={i}>{d}</th>
                    ))}
                  </tr>
                </tfoot>
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

export default ProfileDatatable;
