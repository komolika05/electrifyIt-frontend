import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import { useEffect, useState, useRef } from "react";

import "./layout.scss";

const Layout = () => {
  const location = useLocation();

  const pageTitle = location.pathname.split("/").filter((l) => l !== "")[0];

  return (
    <div className="container-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="page">
        <div className="header">
          <h1 style={{ "text-transform": "capitalize" }}>{pageTitle}</h1>
          <h4>USERNAME</h4>
        </div>
        <Outlet />
        <br />
      </div>
    </div>
  );
};
export default Layout;
