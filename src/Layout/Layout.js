import { Outlet } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <br />
      </div>
    </div>
  );
};
export default Layout;
