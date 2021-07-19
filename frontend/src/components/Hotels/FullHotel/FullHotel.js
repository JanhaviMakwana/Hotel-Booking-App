import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { withRouter } from 'react-router';
import { withState } from '../../../hotel-context';
import Carousel from 'react-multi-carousel';
import { Container, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SET_ERROR } from '../../../store/actionTypes';
import RoomIcon from '@material-ui/icons/Room';
import HotelsCarousel from '../HotelsCarousel/HotelsCarousel';
import HotelService from '../../../services/hotel';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const styles = makeStyles((theme) => ({
    carousel: {
        height: '350px',
        width: '100%',
        margin: '0 20px'
    },
    section1: {
        display: 'flex', flexFlow: 'row wrap', height: '100px'
    },
    unorderdList: {
        display: 'flex', flexFlow: 'row wrap', color: 'green', fontSize: '20px'
    },
    btnBook: {
        marginLeft: '80%', width: '100px', height: '50px', marginTop: '30px'
    },
    backBtn: {
        width: '10%',
        float: 'left',
        margin: '5px 10px'
    },
    facilities: {
        margin: 'auto 14px'
    },
    head: {
        display: 'flex', flexFlow: 'column wrap'
    },
    hotelName: {
        float: 'left', fontWeight: 'bold', fontSize: '30px', width: 'fit-content'
    },
    facilityTitle: {
        fontWeight: '700', marginLeft: '20px', fontSize: '20px'
    }
}));


const FullHotel = (props) => {
    const classes = styles();
    const { id } = props.match.params;
    const {dispatch} = props;
    const [hotel, setHotel] = useState();

    useEffect(() => {
        const fetechedHotel = () => {
            HotelService.getHotelById(id)
                .then(res => {
                    setHotel(res);
                })
                .catch(err => {
    
                    dispatch({ type: SET_ERROR, error: err.message });
                })
        }
        fetechedHotel();
        // eslint-disable-next-line
    }, [])


    const facilities = hotel && hotel.hotelFacilities.map((facility, index) => {
        return <li className={classes.facilities}>{facility.facility}</li>
    });

    const imageCarousel = hotel && hotel.hotelImages.map((image, index) => {
        return <HotelsCarousel key={index} image={require(`../../../assets/${hotel.hotelName}/${image.image}`).default} />
    });



    const bookClickHandler = (id) => {
        if (props.state.user) {
            props.history.push({
                pathname: `/hotel/${id}/book`,
                hotelPrice: hotel.price,
                id: hotel.id
            });
        } else {
            props.history.push('/auth');
        }
    };

    const backHandler = () => {
        props.history.goBack();
    }

    const style = {
        width: 'fit-content',
        float: 'left'
    }

    return (
        <div >
            {hotel &&
                <Container>
                    <Button className={classes.backBtn}
                        variant="contained"
                        color="primary"
                        onClick={backHandler}>
                        Back
                    </Button>
                    <Container>
                        <Container className={classes.head}>
                            <Container className={classes.section1}>
                                <p className={classes.hotelName}>{hotel.hotelName}</p>
                                {(props.state.user && props.state.user.role === 'admin')
                                    ? null
                                    : <Button className={classes.btnBook}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => bookClickHandler(hotel.id)}>
                                        Book
                                    </Button>}

                            </Container>
                            <Typography style={style}><RoomIcon />{hotel.address}</Typography>
                        </Container>
                        <Container>
                            <Typography style={{ ...style }} className={classes.facilityTitle}>Facilities</Typography>
                            <ul className={classes.unorderdList}>
                                {facilities}
                            </ul>
                        </Container>
                        <Carousel className={classes.carousel} responsive={responsive} infinite={true}
                            partialVisbile={false}>
                            {imageCarousel}
                        </Carousel>
                    </Container>
                </Container>}
        </div>
    );
};

export default withRouter(withState(FullHotel));
