import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav>
            <div className="links">
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Početna</NavLink>
                <NavLink to="/rooms" className={({ isActive }) => isActive ? "active-link" : "" }>  Sobe</NavLink>
                <NavLink to="/reservations" className={({ isActive }) => isActive ? "active-link" : ""}> Rezervacije</NavLink>
                <NavLink to="/contact" className={({ isActive }) =>   isActive ? "active-link" : "" }> Kontakt</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;