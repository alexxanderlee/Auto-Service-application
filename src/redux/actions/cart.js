export const addProductToCart = (product) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: product
});

export const removeProductFromCart = (id) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: id
});

export const decreaseProduct = (id) => ({
    type: 'DECREASE_PRODUCT',
    payload: id
});

export const increaseProduct = (id) => ({
    type: 'INCREASE_PRODUCT',
    payload: id
});