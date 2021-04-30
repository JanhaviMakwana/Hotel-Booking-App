import React from 'react';
import { withRouter } from 'react-router';
/* import {connect} from 'react-redux'; */
import { Card, CardMedia, Button, Container } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    hotel: {
        display: 'flex',
        flexFlow: 'row',
        backgroundColor: '#e0e0e0',
        border: '1px solid b0b0b0',
        margin: '12px',
        width: '100%',
        height: 'fit-content',

        float: 'left'
    },
    hotelname: {
        fontWeight: 'bold',
        fontSize: '24px',
        fontFamily: 'Open Sans',
        width: 'fit-content',
        color: '#1b3f8b'
    },
    info: {
        width: 'fit-content',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'left'
    },
    poster: {
        maxWidth: '345px',
        height: '200px',
        margin: 'auto 5px'
    },
    media: {
        height: '200px',
        width: '100%'
        /*  paddingTop: '56.25%' */
    },
    details: {
        display: 'flex',
        flexFlow: 'column wrap',
        width: '450px',
        margin: '10px 5px',
        float: 'left'
    },
    priceDetails: {
        /* backgroundColor: 'lightgray', */

        width: '400px',
        float: 'right',
        padding: '15px 0',
        margin: '10px 5px'
    },
    reviews: {
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%'
    },
    ratings: {
        display: 'block',
        marginLeft: 'auto',
        border: '1px solid #1b3f8b',
        color: 'white',
        backgroundColor: '#1b3f8b',
        margin: 'auto 10px',
        padding: '2px',
        width: '35px',
        height: '30px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        fontWeight: 'bold'
    },
    section1: {
        display: 'flex',
        flexFlow: 'column wrap',
        float: 'right'
    }
}));

const style = {
    width: 'fit-content', float: 'left'
};



const Hotel = (props) => {
    const classes = useStyles();
    console.log(props);
    const hotel = props.hotel;
    const folder = hotel.foldername;
    const adultType = hotel.persons === '1' ? 'adult' : 'adults';
    const posterImgUrl = require(`../../../assets/${folder}/${hotel.poster}`).default;
    let review = 'Good';
    if (parseFloat(hotel.ratings) > 9) {
        review = 'Superb';
    } else if (parseFloat(hotel.ratings) > 8.5) {
        review = 'Fabulous'
    } else if (parseFloat(hotel.ratings) > 8) {
        review = 'Very Good'
    }

    const clickHotelDetails = (id) => {
        if (props.location.pathname !== '/') {
            props.history.push(`${props.location.pathname}/hotel/${id}`);
        } else {
            props.history.push(`hotel/${id}`);
        }

    };
    return (
        <Container className={classes.hotel} >
            <Card className={classes.poster}>
                <CardMedia style={{ height: '100%', width: '100%' }} >
                    <img src={posterImgUrl} className={classes.media} alt={hotel.foldername} />
                </CardMedia>
            </Card>
            <Container style={{ display: 'flex', flexFlow: 'row', width: 'fit-content' }}>
                <div className={classes.details}>
                    <p className={classes.hotelname}>{hotel.name}</p>
                    <p style={{ textAlign: 'left' }}><RoomIcon style={{ fontSize: '17px' }} />{hotel.address}</p>
                    <div className={classes.info}>
                        <p style={style}>{hotel.beds}</p>
                        {hotel.FreeCancellation === 'Yes' && <p style={{ ...style, ...{ color: 'green' } }}>Free Cancellation</p>}
                    </div>
                </div>
                <div className={classes.priceDetails}>

                    <div className={classes.section1}>
                        <div className={classes.reviews}>
                            <p style={{ fontWeight: '500', fontFamily: 'Open Sans' }}>{review}</p>
                            <p className={classes.ratings}>{hotel.ratings}</p>
                        </div>
                        <p style={{ color: 'gray' }}>{`${hotel.nights} night ,${hotel.persons} ${adultType}`} </p>
                        <p>{hotel.price}</p>
                        <Button
                            style={{ width: '120px', fontWeight: 'bold' }}
                            variant="contained"
                            color="primary"
                            onClick={() => clickHotelDetails(hotel.id)}
                        >See<KeyboardArrowRightIcon /></Button>
                    </div>

                </div>
            </Container>
        </Container>
    );
};

export default withRouter(Hotel);