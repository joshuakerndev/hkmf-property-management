import React from 'react';
import './ServicesCircle.scss';

const ServicesCircle = ({ currentCircle }) => {
    return (
        <div className="ServicesCircle">
            <div className={
                currentCircle === 1 ? 
                "Circle Circle1 CurrentCircle" : 
                "Circle Circle1"
                }
                onClick={
                    currentCircle === 1 ? handleClickCircle
                    : ''
                } 
            >
                <div className={
                    currentCircle >= 1 ? 
                    "CircleFilterActive CircleFilter" : 
                    "CircleFilter"
                    } 
                />
            </div>
            <p className="CircleText">Hello</p>
        </div>
    )
}


export default ServicesCircle;