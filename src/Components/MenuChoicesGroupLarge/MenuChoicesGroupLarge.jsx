import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuChoicesGroupLarge.scss';

const MenuChoicesGroupLarge = ({ menuOpen, handleChangeOption }) => {
    return (
        <div 
                className={
                    menuOpen ?
                    "MenuChoicesGroupLarge fade-in"
                    : "MenuChoicesGroupLarge fade-out"
                }
            >
                <div className="MenuChoice"
                    onClick = {handleChangeOption}
                >
                    <NavLink 
                        to="/services" 
                        className="HamburgerNavLink"
                    >
                        Services
                    </NavLink>
                </div>
                <div className="MenuChoice"
                    onClick = {handleChangeOption}
                >
                    <NavLink 
                        to="/about" 
                        className="HamburgerNavLink"
                    >
                        About
                    </NavLink>
                </div>
                <div className="MenuChoice"
                    onClick = {handleChangeOption}
                >
                    <NavLink 
                        to="/contact" 
                        className="HamburgerNavLink"
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
    )
}


export default MenuChoicesGroupLarge;