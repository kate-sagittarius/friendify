import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        'main-container': {
            height: '100%',
            width: '100%',
        },
        users: {
            backgroundColor: '#B8B8AA',
        },
    }),
);

export default function Users() {
    const classes = useStyles();

    return (
        <div>

        </div>
    );
}