import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Gallery from './Gallery';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'flex-start',
            },
        },
        heading: {
            color: '#7F9183',
            margin: '36px 0',
            textAlign: 'center',
        },
    }),
);

export default function Home() {
    const classes = useStyles();
    // const [elevation, setElevation] = React.useState(1);

    return (
        <Container className={classes.root} maxWidth={'md'}>
            <h1 className={classes.heading}>Welcome to Friendify</h1>
            <div>
                <Gallery />
            </div>
        </Container>
    );
}