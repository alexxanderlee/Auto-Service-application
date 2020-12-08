export const fetchCategories = () => (dispatch) => {
    fetch('http://localhost:3000/db.json')
        .then((respose) => respose.json())
        .then(json => {
            dispatch(setCategories(json.categories));
        });
};

export const setCategories = (items) => ({
    type: 'SET_CATEGORIES',
    payload: items
});