import React from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="d-flex flex-nowrap" id="wrapper">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
