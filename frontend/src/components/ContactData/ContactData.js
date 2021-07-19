import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withState } from '../../hotel-context';
import { Container, TextField, Button, CssBaseline, makeStyles, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import AuthService from '../../services/auth';
import OrderService from '../../services/order';
import { SET_ERROR } from '../../store/actionTypes';
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
    form: {
        width: '90%',
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: '10px',
        borderRadius: '10px'
    },
    label: {
        margin: '5px',
        padding: '10px',
        float: 'left'
    },
    select: {
        width: '200px',
        float: 'left'
    }
}));

const ContactData = React.memo((props) => {
    const classes = styles();
    const userId = props.state.user.id;
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [number, setNumber] = useState();
    const [paymentMode, setPaymentMode] = useState();
    const [updated, setUpdated] = useState(false);
    const { dispatch } = props;

    useEffect(() => {

        const fetchUser = () => {
            AuthService.getUserProfile(userId)
                .then(res => {
                    setName(res.name);
                    setAddress(res.address);
                    setNumber(res.contactNo);
                })
                .catch(err => {
                    dispatch({ type: SET_ERROR, error: err.message });
                })
        }
        fetchUser();
        // eslint-disable-next-line
    }, [userId])

    const nameChangeHandler = (event) => {
        setName(event.target.value);
        setUpdated(true);
    };
    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
        setUpdated(true);
    };
    const numberChangeHandler = (event) => {
        setNumber(event.target.value);
        setUpdated(true);
    };
    const paymentModeChangeHandler = (event) => {
        setPaymentMode(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (updated) {
            AuthService.updateUserProfile(userId, {
                name: name,
                address: address,
                contactNo: number
            })
                .then(res => {
                })
                .catch(err => {
                    dispatch({ type: SET_ERROR, error: err.message });
                })
            setUpdated(false);
        }
        OrderService.createOrder(props.state.user.id, {
            hotelId: parseInt(props.data.state.hotelId),
            days: parseInt(props.data.state.days),
            price: parseInt(props.data.state.price),
            rooms: parseInt(props.data.state.rooms),
            paymentMode: paymentMode
        }).then(res => {
            props.history.push('/orders');
        }).catch(err => {
            dispatch({ type: SET_ERROR, error: err.message });
        })


    }

    return (
        <Container>
            <CssBaseline>
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={formSubmitHandler}>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label='Name'
                            value={name}
                            onChange={nameChangeHandler}
                            autoFocus

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Address"
                            autoFocus
                            value={address}
                            onChange={addressChangeHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Moblie No"
                            value={number}
                            onChange={numberChangeHandler}
                            autoFocus
                            inputProps={{ minLength: 10, maxLength: 10 }}
                        />
                        <FormLabel>Payment Mode</FormLabel>
                        <RadioGroup value={paymentMode} onChange={paymentModeChangeHandler}>
                            <FormControlLabel value="wallet" control={<Radio />} label="Wallet" />
                            <FormControlLabel value="banktransfer" control={<Radio />} label="Bank Trasfer" />
                        </RadioGroup>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >Book</Button>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
});

export default withRouter(withState(ContactData));
