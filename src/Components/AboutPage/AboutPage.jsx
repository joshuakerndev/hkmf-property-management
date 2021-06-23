import React from 'react';
import './AboutPage.scss';
import ProfileImage from "../../assets/new1.jpg";

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <div className="AboutPageBGSection" />
            <div className="AboutPageBGFilterSection" >
            <div className="Shadow" />
                <div className="ContainerTest">
                    <p className="test">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta leo quis nunc malesuada, ac egestas eros pulvinar. Mauris mattis faucibus libero ultrices faucibus. Mauris feugiat sodales purus, ut accumsan nisl varius malesuada. Duis consectetur pretium tincidunt. Sed non malesuada libero. Donec tempus scelerisque ultricies. Morbi mattis turpis ut lacus vestibulum imperdiet. Maecenas sapien purus, fringilla nec mi sed, feugiat aliquam metus.    
                    </p> 
                </div>
            </div>
            <div className="AboutPageImageSection">
                <img className="AboutPageProfileImage" src={ProfileImage} alt="Profile" />
            </div>
            
            <div className="CenterButtonContainer">
                <div className="AboutPageCenterButton">Defining the Modern Touch</div>
            </div>
        </div>
    )
}

export default AboutPage;