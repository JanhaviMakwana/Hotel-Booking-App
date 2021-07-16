import React from 'react';
import { Container } from '@material-ui/core';
import { withState } from '../../hotel-context';
import { hotels as HotelsData } from '../../HotelsBank/HotelsBank';
import { makeStyles } from '@material-ui/styles';
import Hotel from './Hotel/Hotel';

const styles = makeStyles((theme) => ({
    hotels: {
        display: 'flex',
        flexFlow: 'column wrap'
    }
}));

const Hotels = React.memo((props) => {
    const classes = styles();
    const showHotels = HotelsData.map(hotel => {
        return <Hotel hotel={hotel} key={hotel.id} />
    });

    return (
        <Container className={classes.hotels}>
            {showHotels}
        </Container>
    );
});

export default withState(Hotels);