import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { withRouter } from 'react-router';
import { withState } from '../../../hotel-context';
import Carousel from 'react-multi-carousel';
import { Container, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RoomIcon from '@material-ui/icons/Room';
import { hotels as hotelsBank } from '../../../HotelsBank/HotelsBank';
import HotelsCarousel from '../HotelsCarousel/HotelsCarousel';

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
    console.log(props);
    const { id } = props.match.params;
    const filteredHotel = hotelsBank.find(x => x.id === id);
    const images = filteredHotel.images;
    const imageFolder = filteredHotel.foldername;
    const facilities = filteredHotel.facilities.map((facility, index) => {
        return <li className={classes.facilities}>{facility}</li>
    });

    const imageCarousel = images.map((image, index) => {
        return <HotelsCarousel key={index} image={require(`../../../assets/${imageFolder}/${image}`).default} />
    });

    const bookClickHandler = (id) => {
        if (props.state.user) {
            props.history.push(`/hotel/${id}/book`);
        } else {
            props.history.push({
                pathname: '/auth',
                state: {
                    id: id
                }
            });
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
            <Button className={classes.backBtn}
                variant="contained"
                color="primary"
                onClick={backHandler}>
                Back
            </Button>
            <Container>
                <Container className={classes.head}>
                    <Container className={classes.section1}>
                        <p className={classes.hotelName}>{filteredHotel.name}</p>
                        <Button className={classes.btnBook}
                            variant="contained"
                            color="primary"
                            onClick={() => bookClickHandler(filteredHotel.id)}>
                            Book
                        </Button>

                    </Container>
                    <Typography style={style}><RoomIcon />{filteredHotel.address}</Typography>
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
        </div>
    );
};

export default withRouter(withState(FullHotel));
