import React, { useState } from 'react';
import './ServicesPage.scss';

const ServicesPage = () => {

    const [currentCircle, setCurrentCircle] = useState(1);
    
    const handleClickCircle = () => {
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
                    >
                        <div className={
                            currentCircle >= 2 ? 
                            "CircleFilterActive CircleFilter" : 
                            "CircleFilter"
                            } 
                        />
                    </div>
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
                    >
                        <div className={
                            currentCircle >= 3 ? 
                            "CircleFilterActive CircleFilter" : 
                            "CircleFilter"
                            } 
                        />
                    </div>
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
                    >
                        <div className={
                            currentCircle >= 4 ? 
                            "CircleFilterActive CircleFilter" : 
                            "CircleFilter"
                            } 
                        />
                    </div>
                    <p className="CircleText">Hello</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;