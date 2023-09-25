import React from "react";
import TableData from "../Data/TableData";
import Values from "./Values";
function Table() {
  return (
    <div>
      <table className="table spaced-table table-borderless">
        <thead>
          <tr>
            <th scope="col">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </th>
            <th scope="col">Invoice ID</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Payable Amount</th>
            <th scope="col">Paid Amount</th>
            <th scope="col">Due</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((e, i) => {
            return <Values data={e} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
