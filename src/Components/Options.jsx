import React from "react";
function Options(props) {
  return (
    <>
      <li className="nav-item side-bar-list mb-4 mt-1">
        <a href="#" className="nav-link text-muted" aria-current="page">
          <img
            className="active-line"
            src={props.data.activeline}
            style={{ visibility: props.data.isActive ? "visible" : "hidden" }}
          />
          <img
            className="sidebar-icon"
            src={props.data.isActive ? props.data.activimg : props.data.img}
          />
          <span className={props.data.isActive ? "text-primary" : " "}>
            {props.data.menu}
          </span>
        </a>
      </li>
    </>
  );
}
export default Options;
