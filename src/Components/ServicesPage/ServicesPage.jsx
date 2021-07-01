import React, { useState } from 'react';
import ServicesModal from '../ServicesModal/ServicesModal';
import './ServicesPage.scss';
import SERVICES_PAGE_TEXT from './SERVICES_PAGE_TEXT';
import Grid from '@material-ui/core/Grid';

const ServicesPage = () => {

    const [currentCircle, setCurrentCircle] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleClickCircle = () => {
        setCurrentCircle(currentCircle + 1);
        if(currentCircle === 4) {
            setModalOpen(true);
        }
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return (
        <div className="ServicesPage">
            <div className="ServicesPageBGSection"> 
                <div className="ServicesPageBGFilterSection">
                    <Grid container justify="center" className="HeaderGrid">
                        <Grid item xs={2} sm={1} md={0}>

                        </Grid>
                        <Grid item xs={3} sm={3} md={12} className="ServicesPageHeaderText">
                            Services
                        </Grid>
                        <Grid item xs={7} sm={8} md={0}>

                        </Grid>
                    </Grid>
                </div>
            </div>
            
            <div className="Shadow" />
            <Grid container justify="center" className="ServicesPageContent">
                <Grid item xs={12} sm={6} md={3} className="CircleSection">
                    <Grid container justify="center" className="CircleItemGrid">
                        <Grid item xs={6} sm={12} className="CircleItem">
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
                        </Grid>
                        <Grid item xs={6} sm={12} className="CircleItem">
                            <p 
                                className={
                                    currentCircle >= 1 ? 
                                    "CircleText fade-in"
                                    : "CircleText fade-out"
                                }
                            >
                                {SERVICES_PAGE_TEXT[0]}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="CircleSection">
                    <Grid container justify="center" className="CircleItemGrid">
                        <Grid item xs={6} sm={12} className="CircleItem">
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
                        </Grid>
                        <Grid item xs={6} sm={12} className="CircleItem">
                            <p 
                                className={
                                    currentCircle >= 2 ? 
                                    "CircleText fade-in"
                                    : "CircleText fade-out"
                                }
                            >
                                {SERVICES_PAGE_TEXT[1]}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="CircleSection">
                    <Grid container justify="center" className="CircleItemGrid">
                        <Grid item xs={6} sm={12} className="CircleItem">
                            <div className={
                                currentCircle === 1 ? 
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
                        </Grid>
                        <Grid item xs={6} sm={12} className="CircleItem">
                            <p 
                                className={
                                    currentCircle >= 3 ? 
                                    "CircleText fade-in"
                                    : "CircleText fade-out"
                                }
                            >
                                {SERVICES_PAGE_TEXT[2]}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="CircleSection">
                    <Grid container justify="center" className="CircleItemGrid">
                        <Grid item xs={6} sm={12} className="CircleItem">
                            <div className={
                                currentCircle === 1 ? 
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
                        </Grid>
                        <Grid item xs={6} sm={12} className="CircleItem">
                            <p 
                                className={
                                    currentCircle >= 4 ? 
                                    "CircleText fade-in"
                                    : "CircleText fade-out"
                                }
                            >
                                {SERVICES_PAGE_TEXT[3]}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <ServicesModal open={modalOpen} handleClose={handleModalClose} />
        </div>
    )
}

export default ServicesPage;