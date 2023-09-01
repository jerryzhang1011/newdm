import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import Logo from "./logo.png"

const Nav = ({ children }) => {
    return <nav>{children}</nav>;
};

const NavLink = ({ to, children }) => {
    return (
        <Link to={to} style={{ margin: "0 15px", textDecoration: "none" }}>
            {children}
        </Link>
    );
};

const NavMenu = ({ children }) => {
    return <ul style={{ listStyle: "none", display: "flex" }}>{children}</ul>;
};

const Navbar = () => {
    return (
        <Nav>
            <img src={Logo} alt="logo"/>
            <div className="nav-list">
                <NavMenu>
                    <ul>
                        <li className="pp"><NavLink to="/"><a href="#">Home</a></NavLink></li>
                        <li className="pp"><NavLink to="/explore"><a href="#">Explore</a></NavLink></li>
                        <li className="pp"><NavLink to="/about"><a href="#">About Us</a></NavLink></li>
                        <li className="pp"><NavLink to="/contact"><a href="#">Contact Us</a></NavLink></li>
                    </ul>
                </NavMenu>
            </div>
        </Nav>
    );
};

export default Navbar;