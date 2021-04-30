import React from 'react';
import { Container, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() => ({
    card: {
        width: '70%',
        margin: '10px auto'
    },
    order: {
        width: 'fit-content',
        float: 'left'
    },
    group: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    label: {
        width: '300px',
        fontWeight: '600'
    },
    detail: {
        fontWeight: '400'
    }
}));

const Order = (props) => {

    const classes = styles();
    const currentOrder = props.order;
    console.log(props.order);

    return (
        <Card className={classes.card}>
            <Container className={classes.order}>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Name</ Typography>
                    <Typography className={classes.detail}> {currentOrder.firstname + " " + currentOrder.lastname}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Order Id </Typography>
                    <Typography className={classes.detail}>{currentOrder.id}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Contact No </Typography>
                    <Typography className={classes.detail}>{currentOrder.contactNo}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Hotel </Typography>
                    <Typography className={classes.detail}>{currentOrder.hotelname}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Days </Typography>
                    <Typography className={classes.detail}>{currentOrder.days}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Rooms </Typography>
                    <Typography className={classes.detail}>{currentOrder.rooms}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Price </Typography>
                    <Typography className={classes.detail}>{currentOrder.price}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Payment Mode </Typography>
                    <Typography className={classes.detail}>{currentOrder.paymentmode}</Typography>
                </div>
            </Container>
        </Card>

    );
};

export default Order;