import React from 'react';
import { withRouter } from 'react-router';
import { withAuth } from '../../hotel-context';
import { AppBar, Typography, IconButton, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewListIcon from '@material-ui/icons/ViewList';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    loginBtn: {
        color: 'white'
    }
}));

const AppBarComp = React.memo((props) => {
    console.log("AppBar");

    const handleClickOpen = () => {
        props.history.push('/auth');
        /* if (props.token) {
            props.onLogout();
            props.history.push('/');
        } else {
            setOpen(true);
        } */
    }

    const classes = styles();
    console.log(props.isAuthenticated);
    return (
        <div>
            <AppBar position="absolute">
                <Toolbar className={classes.toolbarIcon}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={props.onClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        HOTEL BOOKING SYSTEM
                    </Typography>
                    {props.isAuthenticated && <Button>
                        <ViewListIcon style={{ color: 'white' }} />
                        <Typography style={{ color: 'white' }} variant="h6">ORDERS </Typography>
                    </Button>}
                    <Button onClick={handleClickOpen} >
                        <AccountCircleIcon style={{ color: 'white' }} />
                        <Typography className={classes.loginBtn} variant="h6">
                            {!props.isAuthenticated ? 'LOGIN' : 'LOGOUT'}
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
});

export default withRouter(withAuth(AppBarComp));