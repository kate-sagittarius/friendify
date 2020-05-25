import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type PostProps = {
    title: string;
    description: string;
};

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: '#7F9183',
            width: '100%',
        },
        heading: {
          color: '#ffffff',
        },
        content: {
            color: '#000000',
        },
    }),
);

export default function Post(props: PostProps) {
    const classes = useStyles(props);

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom className={classes.heading}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}