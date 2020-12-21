import { history } from '../../helpers';

export const fetchGetProfile = () => (dispatch) => {
    const token = localStorage.token;
    if (token) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': token
            }
        };

        fetch('http://localhost:8090/getbytoken', requestOptions)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(new Error(response.statusText));
                }
                return Promise.resolve(response.json());
            })
            .then(
                (result) => {
                    if (result.status === 200) {
                        dispatch(loginUser(result.client));
                    }
                    if (result.status === "401") {
                        localStorage.removeItem("token");
                        console.log(result.message);
                    }
                },
                (error) => {
                    console.log('Error: ', error);
                }
            )
    }
};

export const fetchGetOrders = () => (dispatch) => {
    const token = localStorage.token;
    if (token) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Token': token
            }
        };
    
        fetch('http://localhost:8090/orders', requestOptions)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(new Error(response.statusText));
                }
                return Promise.resolve(response.json());
            })
            .then(
                (result) => {
                    dispatch(getOrders(result));
                },
                (error) => {
                    console.log(error);
                }
            )
    }
};

export const fetchRemoveOrder = (id) => (dispatch) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    };

    fetch('http://localhost:8090/orders/removeOrder', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response.json());
        })
        .then(
            (result) => {
                if (result.status === 200) {
                    dispatch(fetchGetOrders());
                    alert('Заказ отменен!');
                    //alert(result.message);
                }
                if (result.status === 400) {
                    alert(result.message);
                }
            },
            (error) => {
                alert(error);
            }
        )
};

export const fetchUserSingup = (user) => (dispatch) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch('http://localhost:8090/registration', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response.json());
        })
        .then(
            (result) => {
                localStorage.setItem("token", result.token);
                history.push('/login');
                alert('Вы успешно зарегистрированы!');
            },
            (error) => {
                alert(error);
            }
        )
};

export const fetchUserLogin = (user) => (dispatch) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch('http://localhost:8090/login', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response.json());
        })
        .then(
            (result) => {
                if (result.status === 200) {
                    localStorage.setItem("token", result.token);
                    dispatch(loginUser(result.client));
                    history.push('/profile');
                }
                if (result.status === "401") {
                    alert(result.message);
                }
            },
            (error) => {
                alert(error);
            }
        )
};

const loginUser = (userObj) => ({
    type: 'LOGIN_USER',
    payload: userObj,
});

const getOrders = (orders) => ({
    type: 'GET_ORDERS',
    payload: orders
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
});