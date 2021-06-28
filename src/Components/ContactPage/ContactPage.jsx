import React from 'react';
import './ContactPage.scss';

const ContactPage = () => {
    return (
        <div className="ContactPage">
            <div className="ContactPageHeaderText">
                Contact
            </div>
            <div className="BostonStrip">
                <div className="BostonStripFilterSection">
                    <div className="BostonContactText">
                        <h1 className="ContactHeaderText">BOSTON</h1>
                        <p className="ContactItem">Phone: 626.342.5550</p>
                        <p className="ContactItem">Email: loveandrockets007@gmail.com</p>
                        <p className="ContactItem">383 Cardinal Medeiros Ave</p>
                        <p className="AddressItem">Cambridge, MA, 02141</p>
                    </div>
                </div>
            </div>
            <div className="VegasStrip">
                <div className="VegasStripFilterSection">
                    <div className="VegasContactText">
                        <h1 className="ContactHeaderText">LAS VEGAS</h1>
                        <p className="ContactItem">Phone: 626.342.5550</p>
                        <p className="ContactItem">Email: loveandrockets007@gmail.com</p>
                        <p className="ContactItem">4009 Edgeford Pl</p>
                        <p className="AddressItem">Las Vegas, NV, 89102</p>
                    </div>
                </div>
            </div>
            <div className="ContactPageBottomMargin">

            </div>
        </div>
    )
}

export default ContactPage;