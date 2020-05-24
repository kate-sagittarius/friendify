import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
        },
        container: {
            flexGrow: 1,
            display: 'flex',
            width: '100%',
            height: '100%',
        },
        image: {
            flexGrow: 1,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    }),
);

export default function Gallery() {
    const classes = useStyles();
    let items = [
        {
            title: "People",
            alt: "People",
            src: process.env.PUBLIC_URL + '/images/people.jpg',
        },
        {
            title: "People",
            alt: "People",
            src: process.env.PUBLIC_URL + '/images/people2.jpg',
        },
        {
            title: "Plant",
            alt: "Plant",
            src: process.env.PUBLIC_URL + '/images/plant.jpg',
        },
    ];

    return (
        <Carousel className={classes.root} interval={7000} indicators={false} >
            {
                items.map( (item, index) => <Item {...item} key={index} className={classes.container} /> )
            }
        </Carousel>
    )
}

function Item(props: any) {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <img src={props.src} alt={props.alt} title={props.title} className={classes.image}/>
        </Paper>
    )
}