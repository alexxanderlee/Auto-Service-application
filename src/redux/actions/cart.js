import { history } from '../../helpers';
import { fetchGetOrders } from './user';

export const fetchCheckout = (array) => (dispatch) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(array)
    };

    fetch('http://localhost:8090/orders', requestOptions)
        .then(response => {
            if (response.ok) {
                dispatch(fetchGetOrders());
                alert('Заказ успешно оформлен!');
                history.push('/profile');
                dispatch(clearCart());
            } else {
                alert(response.statusText);
            }
        })
};

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

export const clearCart = () => ({
    type: 'CLEAR_CART'
});