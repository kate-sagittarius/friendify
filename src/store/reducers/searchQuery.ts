export const setQuery = (query: string) => ({ type: 'SET_QUERY', query });

export const queryReducer = (state = '', action: any) => {
    switch (action.type) {
        case 'SET_QUERY':
            return action.query;

        default:
            return state;
    }
};