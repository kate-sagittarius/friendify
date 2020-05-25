import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setPage, setPagePosts } from '../store/reducers/posts';
import { getPosts } from "../utils/requests";
import Pagination from '@material-ui/lab/Pagination';
import Container from "@material-ui/core/Container";
import LinearProgress from '@material-ui/core/LinearProgress';

function Posts({ page, posts, setPage, setPagePosts }: any) {
    React.useEffect(() => {
        if (!posts) {
            getPosts(page).then((posts) => setPagePosts(page, posts));
        }
    }, [page, posts, setPagePosts]);

    return (
        <Container maxWidth={'md'}>
            <pre>
                { posts ? posts.map((post: any) => JSON.stringify(post, null, 2)) : <LinearProgress color="secondary" />}
            </pre>
            <Pagination count={10} color="secondary" page={page} onChange={(event, value) => setPage(value)} />
        </Container>

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