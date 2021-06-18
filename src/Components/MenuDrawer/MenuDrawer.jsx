import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import './MenuDrawer.scss';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export default function MenuDrawer({ menuOpen, handleMenuChange }) {

    const toggleDrawer = (open) => (event) => {
        handleMenuChange();
    }

    return (
        <>
            <Drawer 
                anchor={'right'} 
                open={menuOpen} 
                onClose={toggleDrawer(false)}
            >
                <div
                    className="MainPageDrawer"
                >
                    hello
                </div>
            </Drawer>
        </>
    )
}
