import React from 'react';
import { Container } from '@material-ui/core';
import { withAuth } from '../../hotel-context';
import Hotel from './Hotel/Hotel';
import { hotels as HotelsData } from '../HotelsBank/hotelsBank';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
    hotels: {
        display: 'flex',
        flexFlow: 'column wrap',
        /*  backgroundColor: '#abb1cf' */
    }
}))

const Hotels = React.memo((props) => {
    console.log(props);
    const classes = styles();
    console.log(HotelsData);
    const showHotels = HotelsData.map(hotel => {
        return <Hotel hotel={hotel} key={hotel.id} />
    });

    //const [isAuthenticated] = useContext(AuthProvider);


    return (
        <Container className={classes.hotels}>
            { showHotels}
        </Container>
    );
});


export default withAuth(Hotels);