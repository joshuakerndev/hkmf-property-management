import React, { useState } from 'react';
import './Navbar.scss';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isSelectedOption, setSelectedOption] = useState(0);

    const handleMenuChange = () => {
        setMenuOpen(!menuOpen);
    }

    const handleChangeOption = (input) => {
        setMenuOpen(false);
    }

    return (
        <div className="Navbar">
            <div className="Hamburger">
                <HamburgerMenu 
                    menuOpen={menuOpen}
                    handleMenuChange={handleMenuChange}
                />
            </div>
            
            <Link 
                className="LogoHomeLink" 
                to='/'
                onClick={() => handleChangeOption("Home")}
            >
                <div className="PageHeader">
                    HKMF
                </div>
            </Link>
            <div 
                className={
                    menuOpen ?
                    "MenuChoicesGroup fade-in"
                    : "MenuChoicesGroup fade-out"
                }
            >
                <div className={
                    isSelectedOption === "First" ? 
                    "is-selected-option" 
                    : "MenuChoice MenuChoice1"
                    }
                    onClick = {() => handleChangeOption("First")}
                >
                    <NavLink 
                        to="/services" 
                        className="HamburgerNavLink"
                        id={
                            isSelectedOption === "First" ? 
                            "current-header" 
                            : ""
                        }
                    >
                        Services
                    </NavLink>
                </div>
                <div className={
                    isSelectedOption === "Second" ? 
                    "is-selected-option" 
                    : "MenuChoice MenuChoice2"
                    }
                    onClick = {() => handleChangeOption("Second")}
                >
                    <NavLink 
                        to="/about" 
                        className="HamburgerNavLink"
                        id={
                            isSelectedOption === "Second" ? 
                            "current-header" 
                            : ""
                        }
                    >
                        About
                    </NavLink>
                </div>
                <div className={
                    isSelectedOption === "Third" ? 
                    "is-selected-option"  
                    : "MenuChoice MenuChoice3"
                    }
                    onClick = {() => handleChangeOption("Third")}
                >
                    <NavLink 
                        to="/contact" 
                        className="HamburgerNavLink"
                        id={
                            isSelectedOption === "Third" ? 
                            "current-header" 
                            : ""
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;