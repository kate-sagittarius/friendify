import React from 'react';
import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        'main-container': {
            // height: '100%',
            // width: '100%',
            flexGrow: 1,
        },
        home: {
            backgroundColor: '#B8B8AA',
        },
    }),
);

export default function Home() {
    const classes = useStyles();

    return (
        <div className={`${classes['main-container']} ${classes.home}`}>

        </div>
    );
}