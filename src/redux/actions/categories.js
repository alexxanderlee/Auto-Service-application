export const fetchCategories = () => (dispatch) => {
    fetch('http://localhost:3000/db.json')
        .then((respose) => respose.json())
        .then(result => {
            dispatch(setCategories(result.categories));
        });
};

export const setCategories = (items) => ({
    type: 'SET_CATEGORIES',
    payload: items
});