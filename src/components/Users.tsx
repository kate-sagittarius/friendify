import React from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../store/reducers/users';
import { getUsers } from '../utils/requests';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import User from './User';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '0 auto',
            alignContent: 'center',
        },
        item: {
            margin: 20,
            maxHeight: 150,
            overflow:'hidden',
            minWidth: 200,
            [theme.breakpoints.down('sm')]: {
                maxHeight: 'unset',
            },
        },
        image: {
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: '30%',
        },
        loader: {
            width: '80%',
        },
    }),
);

function Users({ users, setUsers }: any) {
    const classes = useStyles();

    React.useEffect(() => {
        if (!users) {
            getUsers().then(setUsers);
        }
    }, [users, setUsers]);

    return (
        <Grid container spacing={2} className={classes.root}>
            { users
                ? users.map((user: any, index: number) => (
                    <Grid container item spacing={2} xs={3} className={classes.item} key={user.id}>
                        <User
                            name={user.name}
                            index={index}
                            email={user.email}
                            description={user.company.catchPhrase}
                        />
                    </Grid>
                ))
                : <LinearProgress color="secondary" className={classes.loader} />}
            <img
                src={process.env.PUBLIC_URL + '/images/plant2.svg'}
                alt={'Plant'}
                title={'Plant'}
                className={classes.image}
            />
        </Grid>
    );
}

const mapStateToProps = (state: any) => {
    const query = state.query;
    const users = state.users
        ? state.users.filter((user: any) => user.name.toLowerCase().includes(query.toLowerCase()))
        : state.users;
    return {
        users,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setUsers: (users: any) => dispatch(setUsers(users)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);