export const fetchProducts = () => (dispatch) => {
    fetch('http://localhost:3000/db.json')
        .then((respose) => respose.json())
        .then(result => {
            dispatch(setProducts(result.products));
        });
};

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
});