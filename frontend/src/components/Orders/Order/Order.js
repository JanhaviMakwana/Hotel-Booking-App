import { Container, Typography, Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { withState } from '../../../hotel-context';

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
    const currentUser = props.state.user;

    const viewHotelHandler = () => {
        props.history.push(`hotel/${currentOrder.hotelId}`);
    }

    return (
        <Card className={classes.card}>
            <Container className={classes.order}>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Name</ Typography>
                    <Typography className={classes.detail}> {currentUser.name}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Order Id </Typography>
                    <Typography className={classes.detail}>{currentOrder.id}</Typography>
                </div>
                <div className={classes.group}>
                    <Typography align="left" className={classes.label}>Contact No </Typography>
                    <Typography className={classes.detail}>{currentUser.contactNo}</Typography>
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
                    <Typography className={classes.detail}>{currentOrder.paymentMode}</Typography>
                </div>
            </Container>
            <Button
                variant="contained"
                color="primary"
                onClick={viewHotelHandler}
            >
                View Hotel
            </Button>
        </Card>
    );
}

export default withRouter(withState(Order));