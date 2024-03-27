import "./MenuItem.scss";

function MenuItem({ isSelected, iconSrc, name, onItemSelected }) {
  console.log({isSelected})
  return (
    <div className={`container-menuItem ${isSelected && "selected-menuItem"}`} onClick={onItemSelected}>
      <div className="icon">{/* TODO: To include icon image here */}</div>

      <div className="text">{name}</div>
    </div>
  );
}

export default MenuItem;
