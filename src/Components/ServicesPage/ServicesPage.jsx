import React, { useState } from 'react';
import './ServicesPage.scss';

const ServicesPage = () => {

    const [currentCircle, setCurrentCircle] = useState(1);
    
    const handleClickCircle = () => {
        alert('CLICK');
        setCurrentCircle(currentCircle + 1);
    }

    return (
        <div className="ServicesPage">
            <div className="ServicesPageBGSection" />
            <div className="ServicesPageBGFilterSection" />
            <div className="Shadow" />
            <div className="ServicesPageContent">
                <div className="CircleSection">
                    <div className={
                        currentCircle === 1 ? 
                        "Circle Circle1 CurrentCircle" : 
                        "Circle Circle1"
                        }
                        onClick={
                            currentCircle === 1 ? handleClickCircle
                            : ''
                        } 
                    />
                    <p className="CircleText">Hello</p>
                </div>
                <div className="CircleSection">
                    <div className={
                        currentCircle === 2 ? 
                        "Circle Circle2 CurrentCircle" : 
                        "Circle Circle2"
                        }
                        onClick={
                            currentCircle === 2 ? handleClickCircle
                            : ''
                        } 
                    />
                    <p className="CircleText">Hello</p>
                </div>
                <div className="CircleSection">
                    <div className={
                        currentCircle === 3 ? 
                        "Circle Circle3 CurrentCircle" : 
                        "Circle Circle3"
                        }
                        onClick={
                            currentCircle === 3 ? handleClickCircle
                            : ''
                        } 
                    />
                    <p className="CircleText">Hello</p>
                </div>
                <div className="CircleSection">
                    <div className={
                        currentCircle === 4 ? 
                        "Circle Circle4 CurrentCircle" : 
                        "Circle Circle4"
                        }
                        onClick={
                            currentCircle === 4 ? handleClickCircle
                            : ''
                        } 
                    />
                    <p className="CircleText">Hello</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;