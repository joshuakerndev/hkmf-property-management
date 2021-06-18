import React from 'react';
import './CustomDrawer.scss';
import InfoCard from '../InfoCard/InfoCard';

const CustomDrawer = ({ menuOpen, handleMenuChange }) => {
    return (
        <div className={`CustomDrawer-Container ${menuOpen && 'CustomDrawer-Container-isOpen'}`}>
            <InfoCard />
        </div>
    )
}

export default CustomDrawer;