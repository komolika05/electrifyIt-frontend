import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import electrifyLogo from "../Logo/electrifyitnow_logo-removebg-preview.png";
import "./Sidebar.scss";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");

  const pageTitle = location.pathname.split("/").filter((l) => l !== "")[0];

  const items = [
    {
      name: "Overview",
      navigateTo: "/overview",
      iconSrc: (
        <HomeIcon
          sx={{
            fontSize: "22px",
            ...(selectedItem === "Overview" && { color: "black" }),
          }}
        />
      ),
    },
    {
      name: "Vehicles",
      navigateTo: "/vehicles",
      iconSrc: (
        <LocalShippingIcon
          sx={{
            fontSize: "22px",
            ...(selectedItem === "Vehicles" && { color: "black" }),
          }}
        />
      ),
    },
    {
      name: "Chargers",
      navigateTo: "/chargers",
      iconSrc: (
        <OfflineBoltIcon
          sx={{
            fontSize: "22px",
            ...(selectedItem === "Chargers" && { color: "black" }),
          }}
        />
      ),
    },
    {
      name: "Drivers",
      navigateTo: "/drivers",
      iconSrc: (
        <SensorOccupiedIcon
          sx={{
            fontSize: "22px",
            ...(selectedItem === "Drivers" && { color: "black" }),
          }}
        />
      ),
    },
    {
      name: "Schedules",
      navigateTo: "/schedules",
      iconSrc: (
        <EditCalendarIcon
          sx={{
            fontSize: "22px",
            ...(selectedItem === "Schedules" && { color: "black" }),
          }}
        />
      ),
    },
    {
      name: "Reports",
      navigateTo: "/reports",
      iconSrc: (
        <SignalCellularAltIcon
          sx={{
            fontSize: "22px",
            ...(selectedItem === "Reports" && { color: "black" }),
          }}
        />
      ),
    },
    {
      name: "Admin panel",
      navigateTo: "/adminpanel",
      iconSrc: (
        <PersonOutlineIcon
          sx={{
            fontSize: "22px",
            ...(selectedItem === "Admin panel" && { color: "black" }),
          }}
        />
      ),
    },
  ];
  return (
    <div className="container-sidebar">
      <button className="top-left" onClick={() => navigate("/")}>
        <img className="logo" src={electrifyLogo} />
        <h2>Electrify</h2>
        <h2 style={{ color: "blue" }}>It</h2>
      </button>
      <div className="menu-items">
        {items.map(({ iconSrc, name, navigateTo }) => (
          <MenuItem
            isSelected={name.toLowerCase().includes(pageTitle?.toLowerCase())}
            key={name}
            iconSrc={iconSrc}
            name={name}
            onItemSelected={() => {
              setSelectedItem(name);
              navigate(navigateTo);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
