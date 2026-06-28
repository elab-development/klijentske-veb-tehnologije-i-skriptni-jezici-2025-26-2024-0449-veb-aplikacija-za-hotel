import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Početna</Link> |{" "}
      <Link to="/rooms">Sobe</Link> |{" "}
      <Link to="/reservations">Rezervacije</Link> |{" "}
      <Link to="/contact">Kontakt</Link>
    </nav>
  );
}

export default Navbar;