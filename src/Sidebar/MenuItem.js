import "./MenuItem.scss";

function MenuItem({ iconSrc, name, onItemSelected }) {
  return (
    <div className="container-menuItem">
      <div className="icon">{/* TODO: To include icon image here */}</div>

      <div className="text" onClick={onItemSelected}>
        {name}
      </div>
    </div>
  );
}

export default MenuItem;
