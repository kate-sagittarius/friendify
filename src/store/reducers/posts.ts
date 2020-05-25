export const setPagePosts = (page: number, posts: any[]) => ({ type: 'SET_POSTS_PAGE', page, posts });

export const setPage = (page: number) => ({type: 'SET_PAGE', page});

export const postsReducer = (state = { page: 1, pages: {} }, action: any) => {
    switch (action.type) {
        case 'SET_POSTS_PAGE':
            return {
                ...state,
                pages: {
                    ...state.pages,
                    [action.page]: action.posts,
                },
            };

        case 'SET_PAGE':
            return {
                ...state,
                page: action.page,
            };

        default:
            return state;
    }
};