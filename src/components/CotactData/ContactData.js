import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { withAuth} from '../../hotel-context';
import firebase from '../../firebase';
import { Container, TextField, Button, CssBaseline, makeStyles, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

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
    /* const { id } = props.match.params; */
    console.log(props.data);
    console.log();

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [address, setAddress] = useState();
    const [number, setNumber] = useState();
    const [paymentmode, setPaymentmode] = useState();

    const firstnameChangeHandler = (event) => { setFirstname(event.target.value) };
    const lastnameChangeHandler = (event) => { setLastname(event.target.value) };
    const addressChangeHandler = (event) => { setAddress(event.target.value) };
    const numberChangeHandler = (event) => { setNumber(event.target.value) };
    const paymentmodeChangeHandler = (event) => { setPaymentmode(event.target.value) };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {
            ...props.data.state,
            firstname,
            lastname,
            address,
            contactNo: number,
            paymentmode,
            userId: props.userId
        };
        firebase.database().ref('/orders').push(formData).then(res => { console.log(res); });
        props.history.push('/user');
    }

    return (
        <Container>
            <CssBaseline>
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={formSubmitHandler}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="firstname"
                            label="First Name"
                            autoComplete="firstname"
                            value={firstname}
                            onChange={firstnameChangeHandler}
                            autoFocus
                            required
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            id="lastname"
                            label="Last Name"
                            autoComplete="lastname"
                            value={lastname}
                            onChange={lastnameChangeHandler}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Address"
                            autoComplete="address"
                            autoFocus
                            value={address}
                            onChange={addressChangeHandler}
                        /* inputProps={{ step: 300 }} */
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Moblie No"
                            autoComplete="mobile"
                            value={number}
                            onChange={numberChangeHandler}
                            autoFocus
                            inputProps={{ minLength: 10, maxLength: 10 }}
                        />
                        <FormLabel>Payment Mode</FormLabel>
                        <RadioGroup value={paymentmode} onChange={paymentmodeChangeHandler}>
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

export default withRouter(withAuth(ContactData));