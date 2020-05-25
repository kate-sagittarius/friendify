export const setUsers = (users: any) => ({ type: 'SET_USERS', users });

export const usersReducer = (state = null, action: any) => {
    switch (action.type) {
        case 'SET_USERS':
            return action.users;

        default:
            return state;
    }
};