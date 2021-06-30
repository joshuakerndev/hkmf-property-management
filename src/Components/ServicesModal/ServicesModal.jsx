import React from 'react';
import './ServicesModal.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

const ServicesModal = ({open, handleClose}) => {
    return (
        <div className="ServicesModal">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Contact Us for a Quote!"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You are one click away from revolutionizing your management system. Act now and ask about how you can achieve a smooth, hassle-and-worry-free property lifestyle today!
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} variant="outlined" color="primary">
                    <Link className="KnowMoreLink" to='/contact'>
                        I Want to Know More!
                    </Link>
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ServicesModal;