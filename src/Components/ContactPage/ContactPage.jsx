import React from 'react';
import './ContactPage.scss';
import Grid from '@material-ui/core/Grid';

const ContactPage = () => {
    return (
        <div className="ContactPage">
            <Grid container justify="center" className="ContactHeaderGrid">
                <Grid item xs={2} sm={1} md={0}>

                </Grid>
                <Grid item xs={3} sm={3} md={12} className="ContactPageHeaderText">
                    Contact
                </Grid>
                <Grid item xs={7} sm={8} md={0}>

                </Grid>
            </Grid>
            <div className="BostonStrip">
                <div className="BostonStripFilterSection">
                    <div className="BostonContactText">
                        <h1 className="ContactHeaderText">BOSTON</h1>
                        <p className="ContactItem">Phone: 857.919.0208</p>
                        <p className="ContactItem">Email: hkmfmanagement@gmail.com</p>
                        <p className="ContactItem">383 Cardinal Medeiros Ave</p>
                        <p className="AddressItem">Cambridge, MA, 02141</p>
                    </div>
                </div>
            </div>
            <div className="VegasStrip">
                <div className="VegasStripFilterSection">
                    <div className="VegasContactText">
                        <h1 className="ContactHeaderText">LAS VEGAS</h1>
                        <p className="ContactItem">Phone: 857.919.0208</p>
                        <p className="ContactItem">Email: hkmfmanagement@gmail.com</p>
                        <p className="ContactItem">4009 Edgeford Pl</p>
                        <p className="AddressItem">Las Vegas, NV, 89102</p>
                    </div>
                </div>
            </div>
            <div className="ContactPageBottomMargin">
                <p>
                    HKMF
                </p>
                Copyright 2021 HKMF Property Management, All rights reserved.
            </div>
        </div>
    )
}

export default ContactPage;