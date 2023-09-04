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
                        <li className="pp"><NavLink to="/newdm">Home</NavLink></li>
                        <li className="pp"><NavLink to="/explore">Explore</NavLink></li>
                        <li className="pp"><NavLink to="/about">About Us</NavLink></li>
                        <li className="pp"><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </NavMenu>
            </div>
        </Nav>
    );
};


export default Navbar;