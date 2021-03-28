import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>Employee Management System</h2>
            </div>

            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Admin
                        </span>
                    </Link>
                </li>



            </ul>

            <div className="hamburger_menu" onClick={click} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>




    )
}

export default Navbar;