import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav>

            <div className="logo">
                Aurora Palace
            </div>

            <div className="links">

                <Link to="/">
                    Početna
                </Link>

                <Link to="/rooms">
                    Sobe
                </Link>

                <Link to="/reservations">
                    Rezervacije
                </Link>

                <Link to="/contact">
                    Kontakt
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;