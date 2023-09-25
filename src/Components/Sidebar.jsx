import React from "react";
import SidebarOptions from "./Options";
import Sidebardata from "../Data/Sidebardata";

function Sidebar() {
  return (
    <>
      <div className="mt-4 ps-3">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 ps-2 container sidebar"
          style={{ width: "14rem", height: "100%" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4 logo mb-5">Medico Sales</span>
          </a>

          <ul className="nav nav-pills flex-column mb-auto">
            {Sidebardata.map((e, i) => {
              return <SidebarOptions data={e} key={i} />;
            })}
          </ul>

          <a
            href="#"
            className="nav-link link-body-emphasis text-muted ps-4 pb-3"
          >
            <img src="./help.svg" alt="" />
            Help
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
