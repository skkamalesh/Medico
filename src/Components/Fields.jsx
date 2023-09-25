import React from "react";

function Fields(props) {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label mb-3 ms-1 input-label"
        >
          {props.label}
        </label>
        <input
          type="email"
          className="form-control inp-placeholder"
          id="exampleFormControlInput1"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Fields;
