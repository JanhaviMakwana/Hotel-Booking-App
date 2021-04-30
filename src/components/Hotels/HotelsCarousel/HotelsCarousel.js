import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardMedia } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    image: {
        width: '400px',
        height: '300px'
    },
    media: {
        height: '100%',
        width: '100%'
    },
    poster: {
        maxWidth: '345px',
        height: '200px',
        margin: 'auto 5px'
    }
}));

const HotelsCarousel = (props) => {

    const classes = styles();
    return (
        <Card className={classes.image}>
            <CardMedia style={{ height: '100%', width: '100%' }}>
                <img src={props.image} className={classes.media} alt="" />
            </CardMedia>
        </Card>
    );
};

export default HotelsCarousel;