import { createStore as createReduxStore, combineReducers } from 'redux';

import { usersReducer } from './reducers/users';
import { queryReducer } from './reducers/searchQuery';
import { postsReducer } from './reducers/posts';


const reducer = combineReducers({
    users: usersReducer,
    query: queryReducer,
    posts: postsReducer,
});

export const createStore = () => createReduxStore(reducer);