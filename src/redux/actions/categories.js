export const fetchCategories = () => (dispatch) => {
    fetch('http://localhost:8090/getAllCategories')
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response.json());
        })
        .then(
            (result) => {
                dispatch(setCategories(result));
            },
            (error) => {
                console.log(error);
            }
        )
};

export const setCategories = (items) => ({
    type: 'SET_CATEGORIES',
    payload: items
});