import "./MenuItem.scss";

function MenuItem({ iconSrc, name, onItemSelected }) {
  return (
    <div className="container-menuItem" onClick={onItemSelected}>
      <div className="icon">{/* TODO: To include icon image here */}</div>

      <div className="text">{name}</div>
    </div>
  );
}

export default MenuItem;