import React from 'react';
import { withRouter } from 'react-router-dom';
import { withState } from '../../hotel-context';
import { AppBar, Typography, IconButton, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import { makeStyles } from '@material-ui/core/styles';
import { LOGOUT } from '../../store/actionTypes';

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

const style = {
    color: 'white'
}

const AppBarComp = React.memo((props) => {

    const handleClickOpen = () => {

        if (props.state.user) {
            props.dispatch({ type: LOGOUT });
            props.history.push('/');
        } else {
            props.history.push('/auth');
        }
    }

    const homeClickHandler = () => {
        props.history.push('/');
    }

    const classes = styles();
    return (
        <div>
            <AppBar position="absolute">
                <Toolbar className={classes.toolbarIcon}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        HOTEL BOOKING SYSTEM
                    </Typography>

                    <Button onClick={homeClickHandler} >
                        <HomeIcon style={style} />
                        <Typography className={classes.loginBtn} variant="h6">
                            Home
                        </Typography>
                    </Button>

                    {(props.state.user && props.state.user.role === 'admin')
                        && 
                        <Button onClick={() => { props.history.push('/add-hotel') }}>
                            <ViewListIcon style={style} />
                            <Typography style={style} variant="h6">ADD HOTEL </Typography>
                        </Button>

                    }
                    {(props.state.user && props.state.user.role === 'user')
                        &&
                        <Button onClick={() => { props.history.push('/orders') }}>
                            <ViewListIcon style={style} />
                            <Typography style={style} variant="h6">ORDERS </Typography>
                        </Button>
                    }
                    <Button onClick={handleClickOpen} >
                        <AccountCircleIcon style={style} />
                        <Typography className={classes.loginBtn} variant="h6">
                            {!props.state.user ? 'LOGIN' : 'LOGOUT'}
                        </Typography>
                    </Button>

                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
});

export default withRouter(withState(AppBarComp));