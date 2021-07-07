import React, { useState } from 'react';
import './AboutPage.scss';
import ProfileImage from "../../assets/new1.jpg";

const AboutPage = () => {

    const [buttonIsClicked, setButtonIsClicked] = useState(false);

    const handleClick = () => {
        setButtonIsClicked(true);
    }

    return (
        <div className="AboutPage">
            <div className="AboutPageBGSection" />
            <div className="AboutPageBGFilterSection" >
            <div className="Shadow" />
                <div className="AboutPageHeaderText">
                    About
                </div>
                <div className="AboutPageLeftContentColumn">
                    <div className={
                        buttonIsClicked ? 
                        "AboutTextContainerClicked"
                        : "AboutTextContainer"
                    }>
                        <p 
                            className={
                                buttonIsClicked ?
                                "text-fade-in"
                                : "AboutText"
                            }
                        >
                            Fiona is the heart of HKMF. With over two decades of experience as a real estate developer, she has from 2018 led HKMF in the cities of Boston and Las Vegas, managing up to 65 units concurrently throughout the area. Through dilligence and a hands-on philosophy, she ensures that every unit we partner with is both protected and runs smoothly for maximum effectiveness. Her bold, no-nonsense system of direct management leverages both the newest in cutting-edge technology and the tradition of an honest work ethic in order to cut costs, save time, and ensure a consistent high-quality result that is in line with the values and ethic that drive us to success.
                        </p> 
                    </div>
                </div>
            </div>
            <div 
                className={
                    buttonIsClicked ?
                    "AboutPageImageSection image-slide-in"
                    : "AboutPageImageSection"
                }
            >
                <img className="AboutPageProfileImage" src={ProfileImage} alt="Profile" />
            </div>
            
            <div className="CenterButtonContainer">
                <div 
                    className={
                        buttonIsClicked ?
                        "AboutPageCenterButton fade-out"
                        : "AboutPageCenterButton"
                    }
                    onClick={handleClick}
                >
                    Defining the Modern Touch
                </div>
            </div>
        </div>
    )
}

export default AboutPage;