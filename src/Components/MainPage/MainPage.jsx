import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import "./MainPage.scss";

export default function MainPage() {
    return (
        <div className="MainPage">
            <div className="MainPageBGSection" />
            <div className="MenuChoicesGroup">
            </div>
            <div className="MainPageBottomText">
                <span>Real Estate Management</span>
                <p>
                    Defining the Modern Touch
                </p>
            </div>
        </div>
    )
}
