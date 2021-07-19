import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { withState } from '../../hotel-context';
import { makeStyles } from '@material-ui/styles';
import Hotel from './Hotel/Hotel';
import HotelService from '../../services/hotel';

const styles = makeStyles((theme) => ({
    hotels: {
        display: 'flex',
        flexFlow: 'column wrap'
    }
}));

const Hotels = React.memo((props) => {
    const classes = styles();
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = () => {
            HotelService.getHotels()
                .then(res => {
                    console.log(res);
                    setHotels(res);
                })
                .catch(err => {
                    console.log(err);
                })
        };
        fetchHotels();
    }, [])

    return (
        <Container className={classes.hotels}>
    
            {hotels.length > 0  && hotels.map((hotel) => {
                return <Hotel hotel={hotel} key={hotel.id}/>
            })}
        </Container>
    );
});

export default withState(Hotels);