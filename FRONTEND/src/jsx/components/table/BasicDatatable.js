import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const BasicDatatable = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#job_data tbody tr")
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
    setData(document.querySelectorAll("#job_data tbody tr"));
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
 

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Basic Datatable</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div id="job_data" className="dataTables_wrapper">
              <table
                className="display w-100 dataTable "
                id="example5"
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting_asc" style={{ width: "177px" }}>
                      Name
                    </th>
                    <th className="sorting" style={{ width: "278px" }}>
                      Position
                    </th>
                    <th className="sorting" style={{ width: "128px" }}>
                      Office
                    </th>
                    <th className="sorting" style={{ width: "46px" }}>
                      Age
                    </th>
                    <th className="sorting" style={{ width: "114px" }}>
                      Start date
                    </th>
                    <th className="sorting" style={{ width: "110px" }}>
                      Salary
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="odd" role="row">
                    <td className="sorting_1">Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                  </tr>
                  <tr className="even" role="row">
                    <td className="sorting_1">Angelica Ramos</td>
                    <td>Chief Executive Officer (CEO)</td>
                    <td>London</td>
                    <td>47</td>
                    <td>2009/10/09</td>
                    <td>$1,200,000</td>
                  </tr>
                  <tr className="odd" role="row">
                    <td className="sorting_1">Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                  </tr>
                  <tr className="even" role="row">
                    <td className="sorting_1">Bradley Greer</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>41</td>
                    <td>2012/10/13</td>
                    <td>$132,000</td>
                  </tr>
                  <tr className="odd" role="row">
                    <td className="sorting_1">Brenden Wagner</td>
                    <td>Software Engineer</td>
                    <td>San Francisco</td>
                    <td>28</td>
                    <td>2011/06/07</td>
                    <td>$206,850</td>
                  </tr>
                  <tr className="even" role="row">
                    <td className="sorting_1">Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2012/12/02</td>
                    <td>$372,000</td>
                  </tr>
                  <tr className="odd" role="row">
                    <td className="sorting_1">Bruno Nash</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>38</td>
                    <td>2011/05/03</td>
                    <td>$163,500</td>
                  </tr>
                  <tr className="even" role="row">
                    <td className="sorting_1">Caesar Vance</td>
                    <td>Pre-Sales Support</td>
                    <td>New York</td>
                    <td>21</td>
                    <td>2011/12/12</td>
                    <td>$106,450</td>
                  </tr>
                  <tr className="odd" role="row">
                    <td className="sorting_1">Cara Stevens</td>
                    <td>Sales Assistant</td>
                    <td>New York</td>
                    <td>46</td>
                    <td>2011/12/06</td>
                    <td>$145,600</td>
                  </tr>
                  <tr className="even" role="row">
                    <td className="sorting_1">Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2012/03/29</td>
                    <td>$433,060</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th rowSpan="1" colSpan="1">
                      Name
                    </th>
                    <th rowSpan="1" colSpan="1">
                      Position
                    </th>
                    <th rowSpan="1" colSpan="1">
                      Office
                    </th>
                    <th rowSpan="1" colSpan="1">
                      Age
                    </th>
                    <th rowSpan="1" colSpan="1">
                      Start date
                    </th>
                    <th rowSpan="1" colSpan="1">
                      Salary
                    </th>
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

export default BasicDatatable;
