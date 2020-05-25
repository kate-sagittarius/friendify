import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type UserProps = {
    name: string;
    index: number;
    email: string;
    description: string;
};

const colorSchema: Record<number, string> = {
    0: '#D67AB1',
    1: '#9FD8CB',
    2: '#FFE74C',
    3: '#D4ADCF',
    4: '#60435F',
};

const useStyles = makeStyles<Theme, UserProps>((theme) =>
    createStyles({
        root: {
            backgroundColor: '#7A9B76',
            width: '100%',
        },
        header: {
          flexWrap: 'wrap',
        },
        avatar: {
            color: props => theme.palette.getContrastText(colorSchema[props.index % 5]),
            backgroundColor: props => colorSchema[props.index % 5],
            border: '3px solid black',
        },
        content: {
            color: '#ffffff',
        },
    }),
);

export default function User(props: UserProps) {
    const classes = useStyles(props);

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.name.split(' ').slice(0, 2).map(word => word[0].toUpperCase()).join('')}
                    </Avatar>
                }
                title={props.name}
                subheader={props.email}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}