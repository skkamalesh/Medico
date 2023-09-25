import React from "react";
import Fields from "./Fields";

function Form() {
  return (
    <div>
      <div className="mt-4 mb-3">
        <div className="row">
          <Fields label="Customer" placeholder="Enter Customer Name" />
          <Fields label="Invoice ID" placeholder="Enter Invoice ID" />
          <Fields label="Start Date" placeholder="Start Date" />
          <Fields label="End Date" placeholder="End Date" />
        </div>
      </div>
    </div>
  );
}

export default Form;
