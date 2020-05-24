import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        'main-container': {
            height: '100%',
            width: '100%',
        },
        posts: {
            backgroundColor: '#B8B8AA',
        },
    }),
);

export default function Posts() {
    return (
        <div>

        </div>
    );
}