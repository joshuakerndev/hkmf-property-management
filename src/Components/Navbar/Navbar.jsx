import React, { useState } from 'react';
import './Navbar.scss';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import MenuChoicesGroupLarge from '../MenuChoicesGroupLarge/MenuChoicesGroupLarge';
import MenuChoicesGroupSmall from '../MenuChoicesGroupSmall/MenuChoicesGroupSmall';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuChange = () => {
        setMenuOpen(!menuOpen);
    }

    const handleChangeOption = () => {
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
            <Hidden smDown>
                <MenuChoicesGroupLarge 
                    menuOpen={menuOpen} 
                    handleChangeOption={handleChangeOption} 
                />
            </Hidden>
            <Hidden mdUp>
                <MenuChoicesGroupSmall 
                    menuOpen={menuOpen} 
                    handleChangeOption={handleChangeOption} 
                />
            </Hidden>
                
        </div>
    )
}

export default Navbar;