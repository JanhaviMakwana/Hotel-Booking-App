import React from 'react';
/* import { withRouter } from 'react-router';
import { connect } from 'react-redux'; */
import { IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, Drawer } from '@material-ui/core';
/* import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit'; */
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    }

}));

const drawer = React.memo((props) => {

    console.log("Drawer");

    const homeClickHandler = () => {
        //props.history.push('/');
        //props.onClick();
    }

    /* console.log("Drawer"); */
    return (
        <Drawer open={props.open} className={[useStyles.drawerPaper, !props.open && useStyles.drawerPaperClose].join(' ')}>
            <div>
                <IconButton onClick={props.onClick}>
                    <ChevronLeftIcon /> <Typography>BACK</Typography>
                </IconButton>
                <Divider />
                <List>
                    <ListItem button onClick={homeClickHandler}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
                <Divider />
            </div>
        </Drawer>
    );
});

export default drawer;