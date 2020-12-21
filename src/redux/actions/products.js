export const fetchProducts = () => (dispatch) => {
    fetch('http://localhost:8090/spares')
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response.json());
        })
        .then(
            (result) => {
                dispatch(setProducts(result));
            },
            (error) => {
                console.log(error);
            }
        )
};

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
});