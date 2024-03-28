import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import { useEffect, useState, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Layout.scss";

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
          <div className="username">
            <NotificationsIcon sx={{ fontSize: "22px", marginRight: "37px" }} />
            <AccountCircleIcon sx={{ fontSize: "22px", marginRight: "5px" }} />
            <h4>USERNAME</h4>
          </div>
        </div>
        <Outlet />
        <br />
      </div>
    </div>
  );
};
export default Layout;
