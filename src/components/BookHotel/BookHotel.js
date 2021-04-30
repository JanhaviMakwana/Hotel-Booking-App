import React, { useState } from 'react';
import { Container, FormLabel, ButtonGroup, Button, Typography, Modal } from '@material-ui/core';
import { hotels as hotelsBank } from '../HotelsBank/hotelsBank';
import ContactData from '../CotactData/ContactData';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const BookHotel = (props) => {
    const { id } = props.match.params;
    const hotel = hotelsBank.find(x => x.id === id);
    const [rooms, setRooms] = useState(1);
    const [show, setShow] = useState(false);
    const [days, setDays] = useState(1);
    const [price, setPrice] = useState(hotel.price);
    const addRoomClickHandler = (event) => {
        event.preventDefault();
        setRooms(rooms + 1);
        setPrice(eval((rooms + 1) * price));
    };

    const addDayClickHandler = (event) => {
        event.preventDefault();
        setDays(days + 1);
        setPrice(eval((days + 1) * price))
    };

    const removeRoomClickHandler = (event) => {
        event.preventDefault();
        if (rooms >= 1) {
            setRooms(rooms - 1);
            setPrice(eval(price / rooms))
        }
    };
    const removeDayClickHandler = (event) => {
        event.preventDefault();
        if (days >= 1) {
            setDays(rooms - 1);
            setPrice(eval(price / days))
        }
    };

    return (
        <Container style={{ width: '500px', marginTop: '20px' }}>
            <Container style={{ display: 'flex', flexFlow: 'row wrap' }} >
                <FormLabel style={{ width: '200px' }}>Number of rooms:</FormLabel><br />
                <ButtonGroup disableElevation variant="contained" color="primary" style={{ float: 'right' }}>
                    <Button onClick={addRoomClickHandler}><AddIcon /></Button>
                    <Typography>{rooms}</Typography>
                    <Button onClick={removeRoomClickHandler}><RemoveIcon /></Button>
                </ButtonGroup>
            </Container>
            <br /><br />
            <Container style={{ display: 'flex', flexFlow: 'row wrap' }} >
                <FormLabel style={{ width: '200px' }}>Days</FormLabel><br />
                <ButtonGroup disableElevation variant="contained" color="primary" style={{ float: 'right' }}>
                    <Button onClick={addDayClickHandler}><AddIcon /></Button>
                    <Typography>{days}</Typography>
                    <Button onClick={removeDayClickHandler}><RemoveIcon /></Button>
                </ButtonGroup>
            </Container>
            <Typography fullWidth style={{ justifyContent: 'center' }}>Price:{price}</Typography>
            <Typography>Days:{days}</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => { setShow(true) }}
            >Go</Button>
            <Modal open={show} onClose={() => { setShow(false) }}>
                <ContactData data={{ state: { rooms, days, price, hotelname: hotel.name } }} />
            </Modal>
        </Container >
    );
};

export default BookHotel;