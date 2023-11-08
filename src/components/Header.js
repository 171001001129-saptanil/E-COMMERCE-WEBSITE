import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card">
      <h1 className="h-1">Welcome to E-COMMERCE WEBSITE</h1>
      <div onClick={() => props.handleShow(false)}>Shopping Cart App</div>
      <div onClick={() => props.handleShow(true)}>
        Added Cart Items
        <sup>{props.count}</sup>
      </div>
    </div>
  );
}

export default Header;
