import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthProvider, withAuth } from '../../hotel-context';
import firebase from '../../firebase';
import { Container, Avatar, Button, CssBaseline, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const styles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '25px'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    valid: {
        borderBottom: '2px solid red'
    }
}));

const Auth = (props) => {
    console.log(props.isAuthenticated);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signup, setSignup] = useState(false);

    const classes = styles();

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const changeLoginType = () => {
        console.log("change");
        setSignup(!signup);
    };

    const loginCloseHandler = () => {
        console.log("click");
        props.history.push('/');
        props.onClose();
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        let url = null;
        if (!signup) {
            console.log("Login");
            url = firebase.auth().signInWithEmailAndPassword(email, password);
        } else {
            console.log("Signup");
            url = firebase.auth().createUserWithEmailAndPassword(email, password);
        }
        url.then(res => {
            props.setIsAuthenticated(true);
            props.setUserId(res.user.uid);
            //console.log(res);
            console.log(props.isAuthenticated);
            if (props.location.state && props.location.state.id) {
                props.history.push(`/user/hotel/${props.location.state.id}`);
            } else {
                props.history.push('/user');
            }
        })
            .catch(err => {
                console.log(err);
                props.setIsAuthenticated(false);
                alert('Wrong email or password !!! Try again please !!!');
                props.history.goBack();
            });
    };

    return (
        <Container maxWidth="sm">
            <CssBaseline>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                            </Typography>
                    <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
                        <TextField
                            /* className={valid ? null : classes.valid} */
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            type="email"
                            label="Email Address"
                            value={email}
                            autoFocus
                            onChange={onEmailChange}
                        />
                        <TextField
                            /* className={valid ? null : classes.valid} */
                            variant="outlined"
                            margin="normal"
                            value={password}
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            inputProps={{
                                minLength: 5,
                                maxLength: 12
                            }}
                            autoComplete="current-password"
                            onChange={onPasswordChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {signup ? 'SIGN UP' : 'SIGN IN'}
                        </Button>

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={loginCloseHandler}
                        >
                            CANCLE
                                </Button>
                        <Button onClick={changeLoginType} >
                            {!signup ? " Don't have an account? Sign Up" : "Already have an account? Login"}
                        </Button>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
};

export default withRouter(withAuth(Auth));