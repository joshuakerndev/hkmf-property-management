import React, { useState } from 'react';
import './Navbar.scss';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuChange = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="Navbar">
            <div className="Hamburger">
                <HamburgerMenu 
                    menuOpen={menuOpen}
                    handleMenuChange={handleMenuChange}
                />
            </div>
            
            <Link className="LogoHomeLink" to='/'>
            <div className="PageHeader">
                
                    HKMF
                
            </div>
            </Link>
            <div className="MenuChoicesGroup">
                <div className={menuOpen ? "MenuChoice MenuChoice1 fade-in" : "MenuChoice MenuChoice1 fade-out"}>
                    <NavLink to="/services" className="HamburgerNavLink">
                        Services
                    </NavLink>
                </div>
                <div className={menuOpen ? "MenuChoice MenuChoice2 fade-in" : "MenuChoice MenuChoice2 fade-out"}>
                    <NavLink to="/about" className="HamburgerNavLink">
                        About
                    </NavLink>
                </div>
                <div className={menuOpen ? "MenuChoice MenuChoice3 fade-in" : "MenuChoice MenuChoice3 fade-out"}>
                    <NavLink to="/contact" className="HamburgerNavLink">
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;