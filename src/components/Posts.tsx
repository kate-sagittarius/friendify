import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setPage, setPagePosts } from '../store/reducers/posts';
import { getPosts } from "../utils/requests";
import Pagination from '@material-ui/lab/Pagination';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid";
import Post from "./Post";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '-30px auto 0',
            justifyContent: 'center',
            alignContent: 'center',
            [theme.breakpoints.down('sm')]: {
                marginTop: 0,
            },
        },
        item: {
            margin: 10,
            maxHeight: 250,
            overflow:'hidden',
            minWidth: 200,
            [theme.breakpoints.down('sm')]: {
                maxHeight: 'unset',
            },
        },
        loader: {
            width: '80%',
        },
        pagination: {
            position: 'fixed',
            bottom: 30,
        },
    }),
);

function Posts({ page, posts, setPage, setPagePosts }: any) {
    const classes = useStyles();

    React.useEffect(() => {
        if (!posts) {
            getPosts(page).then((posts) => setPagePosts(page, posts));
        }
    }, [page, posts, setPagePosts]);

    return (
        <Grid container spacing={2} className={classes.root}>
            { posts
                ? posts.map((post: any, index: number) => (
                    <Grid container item spacing={2} xs={4} className={classes.item} key={`${page}-${index}`}>
                        <Post
                            title={post.title}
                            description={post.body}
                        />
                    </Grid>
                ))
                : <LinearProgress color="secondary" className={classes.loader}/>}
            <Pagination
                className={classes.pagination}
                count={10}
                color="secondary"
                page={page}
                onChange={(event, value) => setPage(value)}
            />
        </Grid>
    );
}

const mapStateToProps = (state: any) => {
    return {
        page: state.posts.page,
        posts: state.posts.pages[state.posts.page],
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ setPage, setPagePosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);