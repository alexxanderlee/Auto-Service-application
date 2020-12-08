const initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return [...state, ...action.payload];

        default:
            return state;
    }
};

export default products;