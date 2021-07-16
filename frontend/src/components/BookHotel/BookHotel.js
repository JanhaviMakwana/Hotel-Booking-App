import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Container, FormLabel, ButtonGroup, Button, Typography, Modal } from '@material-ui/core';
import { hotels as hotelsBank } from '../../HotelsBank/HotelsBank';
import ContactData from '../ContactData/ContactData';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = makeStyles(() => ({
    paper: {
        width: '500px', marginTop: '20px'
    },
    quantityHandler: {
        display: 'flex', flexFlow: 'row wrap'
    },
    label: {
        width: '200px'
    },
    icon: {
        float: 'right'
        
    },
    price: {
        justifyContent: 'center',
        margin: '8px auto'
    },
    btn: {
        width: '20%',
        margin: '5px 40px'
    }

}));

const BookHotel = (props) => {
    const classes = styles();
    const { id } = props.match.params;
    const hotel = hotelsBank.find(x => x.id === id);
    const [rooms, setRooms] = useState(1);
    const [show, setShow] = useState(false);
    const [days, setDays] = useState(1);
    const [price, setPrice] = useState(hotel.price);

    const addRoomClickHandler = (event) => {
        event.preventDefault();
        setRooms(rooms + 1);
        // eslint-disable-next-line
        setPrice(eval((rooms + 1) * price));
    };

    const addDayClickHandler = (event) => {
        event.preventDefault();
        setDays(days + 1);
        // eslint-disable-next-line
        setPrice(eval((days + 1) * price))
    };

    const removeRoomClickHandler = (event) => {
        event.preventDefault();
        if (rooms > 1) {
            setRooms(rooms - 1);
            // eslint-disable-next-line
            setPrice(eval(price / rooms))
        }
    };

    const removeDayClickHandler = (event) => {
        event.preventDefault();
        if (days > 1) {
            setDays(days - 1);
            // eslint-disable-next-line
            setPrice(eval(price / days))
        }
    };

    const orderCancleHandler = () => {
        props.history.goBack();
    };

    return (
        <Container>
            <Container className={classes.paper}>
                <Container className={classes.quantityHandler} >
                    <FormLabel className={classes.label}>Number of rooms:</FormLabel><br />
                    <ButtonGroup disableElevation variant="contained" color="primary" className={classes.icon}>
                        <Button onClick={addRoomClickHandler}><AddIcon /></Button>
                        <Typography>{rooms}</Typography>
                        <Button onClick={removeRoomClickHandler}><RemoveIcon /></Button>
                    </ButtonGroup>
                </Container>
                <br /><br />
                <Container className={classes.quantityHandler} >
                    <FormLabel className={classes.label}>Days</FormLabel><br />
                    <ButtonGroup disableElevation variant="contained" color="primary" className={classes.icon}>
                        <Button onClick={addDayClickHandler}><AddIcon /></Button>
                        <Typography>{days}</Typography>
                        <Button onClick={removeDayClickHandler}><RemoveIcon /></Button>
                    </ButtonGroup>
                </Container>
                <Typography fullWidth className={classes.price}>Price:{price}</Typography>
                <Typography>Days:{days}</Typography>
                <Button
                    variant="contained"
                    className={classes.btn}
                    color="primary"
                    onClick={() => { setShow(true) }}
                >Go</Button>

                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.btn}
                    onClick={orderCancleHandler}
                >CANCLE</Button>

                <Modal open={show} onClose={() => { setShow(false) }}>
                    <ContactData data={{ state: { rooms, days, price, hotelId: hotel.id } }} />
                </Modal>
            </Container >
        </Container>
    );
}

export default withRouter(BookHotel);