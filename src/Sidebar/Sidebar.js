import { Outlet, useLocation } from "react-router-dom";

import "./Sidebar.scss";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = location.pathname.split("/").filter((l) => l !== "")[0];

  const items = [
    {
      name: "Overview",
      navigateTo: "/overview",
      iconSrc: "",
    },
    {
      name: "Vehicles",
      navigateTo: "/vehicles",
      iconSrc: "",
    },
    {
      name: "Chargers",
      navigateTo: "/chargers",
      iconSrc: "",
    },
    {
      name: "Drivers",
      navigateTo: "/drivers",
      iconSrc: "",
    },
    {
      name: "Schedules",
      navigateTo: "/schedules",
      iconSrc: "",
    },
    {
      name: "Reports",
      navigateTo: "/reports",
      iconSrc: "",
    },
    {
      name: "Admin panel",
      navigateTo: "/adminpanel",
      iconSrc: "",
    },
  ];
  return (
    <div className="container-sidebar">
      <div>LOGO </div>
      <div className="menu-items">
        {items.map(({ iconSrc, name, navigateTo }) => (
          <MenuItem
            isSelected={
              name.toLowerCase().includes(pageTitle?.toLowerCase())
            }
            key={name}
            iconSrc={iconSrc}
            name={name}
            onItemSelected={() => {
              navigate(navigateTo);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
