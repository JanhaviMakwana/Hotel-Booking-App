import React, { useState } from 'react';
import Drawer from './Drawer';
import AppBar from './AppBar';

const DashBoard = React.memo(() => {
    console.log("DashBoard");
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div >
            <AppBar onClick={handleDrawerOpen} />
            <Drawer onClick={handleDrawerClose} open={open} />
        </div >
    );
});

export default DashBoard;
