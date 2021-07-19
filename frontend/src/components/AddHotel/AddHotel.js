import React, { useState } from "react";
import { Container, TextField, Button, CssBaseline, makeStyles, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { withRouter } from "react-router";
import { withState } from "../../hotel-context";
import { SET_ERROR } from "../../store/actionTypes";
import HotelService from "../../services/hotel";

const styles = makeStyles((theme) => ({
    paper: {

        margin: '10px auto',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '25px',
        width: '50%',
        display: 'flex',
        flexDirection: 'row'
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',

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

const AddHotel = (props) => {
    const classes = styles();

    const [hotelData, setHotelData] = useState({
        facilities: [],
        images: [],
        address: '',
        hotelName: '',
        price: null,
        persons: null,
        beds: '',
        ratings: null,
        nights: null,
        freeCancellation: false
    });
    const [currentImage, setCurrentImage] = useState('');
    const [currentFacility, setCurrentFacility] = useState('');


    const onChangeHandler = (event) => {
        const fetchedForm = { ...hotelData };
        fetchedForm[event.target.name] = event.target.value;
        setHotelData(fetchedForm);
    };

    const imageHandler = (event) => {
        setCurrentImage(event.target.value);
    };

    const facilityHandler = (event) => {
        setCurrentFacility(event.target.value);
    }


    const hotelSubmitHandler = (event) => {
        event.preventDefault();
        const data = { ...hotelData }
        HotelService.addHotel(data)
            .then(res => {
                props.history.push('/');
            })
            .catch(err => {
                props.dispatch({ type: SET_ERROR, error: err.message });
            })
    }

    const addImageHandler = (event) => {
        event.preventDefault();
        const fetchedForm = { ...hotelData }
        let images = fetchedForm.images;
        images.push(currentImage);
        setCurrentImage('');
        fetchedForm.images = images;
        setHotelData(fetchedForm);
    }

    const addFacilityHandler = (event) => {
        event.preventDefault();
        const fetchedForm = { ...hotelData }
        let facilities = fetchedForm.facilities;
        facilities.push(currentFacility);
        setCurrentFacility('');
        fetchedForm.facilities = facilities;
        setHotelData(fetchedForm);
    }

    return (
        <Container>
            <CssBaseline>
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={hotelSubmitHandler}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            name="address"
                            value={hotelData.address}
                            label='Address'
                            onChange={onChangeHandler}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            value={hotelData.hotelName}
                            name="hotelName"
                            label='Hotel Name'
                            onChange={onChangeHandler}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="beds"
                            value={hotelData.beds}
                            required
                            label='Bed'
                            onChange={onChangeHandler}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="price"
                            value={hotelData.price}
                            required
                            label='Price'
                            onChange={onChangeHandler}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            name="ratings"
                            value={hotelData.ratings}
                            label='Ratings'
                            onChange={onChangeHandler}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="persons"
                            required
                            label='Person'
                            value={hotelData.persons}
                            onChange={onChangeHandler}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="nights"
                            required
                            label='Nights'
                            value={hotelData.nights}
                            onChange={onChangeHandler}
                            autoFocus
                        />
                        <div className={classes.paper}>
                            <div style={{ margin: '0 10px' }}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    label='Image Name'
                                    value={currentImage}
                                    onChange={imageHandler}
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    onClick={addImageHandler}>
                                    Add ImageName
                                </Button>
                            </div>
                            <div>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    value={currentFacility}
                                    label='Facility'
                                    onChange={facilityHandler}
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    onClick={addFacilityHandler}
                                >
                                    Add Facility
                                </Button>
                            </div>
                        </div>
                        <div className={classes.paper}>
                            <FormLabel>Free Cancellation</FormLabel>
                            <RadioGroup value={hotelData.freeCancellation} name="freeCancellation" onChange={onChangeHandler}>
                                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                <FormControlLabel value="false" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Add Hotel
                        </Button>
                    </form>

                </div>
            </CssBaseline>
        </Container>
    );
};

export default withRouter(withState(AddHotel));