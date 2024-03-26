import "./Sidebar.scss";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const items = [
    {
      name: "Home",
      navigateTo: "/home",
      iconSrc: "",
    },
    {
      name: "Home",
      navigateTo: "/home",
      iconSrc: "",
    },
    {
      name: "Home",
      navigateTo: "/home",
      iconSrc: "",
    },
    {
      name: "Reports",
      navigateTo: "/reports",
      iconSrc: "",
    },
  ];
  return (
    <div className="container-sidebar">
      <div>LOGO </div>
      <div className="menu-items">
        {items.map(({ iconSrc, name, navigateTo }) => (
          <MenuItem
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
