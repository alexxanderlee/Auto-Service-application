const initialState = {
    loggedIn: false,
    currentUser: {},
    orders: []
};

const user = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.payload,
                loggedIn: true
            }

        case 'LOGOUT_USER':
            localStorage.removeItem("token");
            return {
                ...state,
                loggedIn: false,
                currentUser: {},
                orders: []
            }

        case 'GET_ORDERS': {
            console.log(action.payload);
            return {
                ...state,
                orders: action.payload
            }
        }

        default:
            return state;
    }
};

export default user;