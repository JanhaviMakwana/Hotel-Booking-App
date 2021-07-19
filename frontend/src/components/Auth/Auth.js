import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withState } from '../../hotel-context';
import { Container, Button, CssBaseline, TextField, Typography, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthService from '../../services/auth';
import * as actionTypes from '../../store/actionTypes';

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
    },
    btn: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const Auth = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [signup, setSignup] = useState(false);

    const classes = styles();

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onRoleChange = (event) => {
        setRole(event.target.value);
    };

    const changeLoginType = () => {
        setSignup(!signup);
    };

    const loginCloseHandler = () => {
        props.history.push('/');
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!signup) {
            AuthService.login({ email: email, password: password, role: role })
                .then(res => {
                    props.dispatch({ type: actionTypes.AUTH_SUCCESS, user: res });
                    props.history.goBack();
                })
                .catch(err => {
                    props.dispatch({ type: actionTypes.AUTH_FAIL, error: err.message })
                })
        } else {
            AuthService.signup({ email: email, password: password, role: role })
                .then(res => {
                    props.dispatch({ type: actionTypes.AUTH_SUCCESS, user: res });
                    props.history.goBack();
                })
                .catch(err => {
                    props.dispatch({ type: actionTypes.AUTH_FAIL, error: err.message })
                })
        }
    };

    return (
        <Container maxWidth="sm">
            <CssBaseline>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
                        <TextField
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
                        <RadioGroup value={role} onChange={onRoleChange}>
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                            <FormControlLabel value="user" control={<Radio />} label="User" />
                        </RadioGroup>
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
                            color="secondary"
                            className={classes.btn}
                            onClick={loginCloseHandler}
                        >
                            CANCEL
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                            onClick={changeLoginType}
                        >
                            {!signup ? " Don't have an account? Sign Up" : "Already have an account? Login"}
                        </Button>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );

};

export default withRouter(withState(Auth));