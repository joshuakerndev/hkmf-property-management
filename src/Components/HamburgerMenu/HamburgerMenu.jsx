import React from 'react';
import './HamburgerMenu.scss';

export default function HamburgerMenu({ handleMenuChange, menuOpen }) {
    return (
        <div 
            className={
                menuOpen ? "HamburgerMenu HamburgerOpen" 
                : "HamburgerMenu"
            } 
            onClick={handleMenuChange}
        >
            <div className="TheBurger">

            </div>
        </div>
    )
}
