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
                    return Promise.reject(new Error(response.status));
                }
                return Promise.resolve(response.json());
            })
            .then(
                (result) => {
                    if (result.status === "200") {
                        dispatch(loginUser(result.user));
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
                return Promise.reject(new Error(response.status));
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
                return Promise.reject(new Error(response.status));
            }
            return Promise.resolve(response.json());
        })
        .then(
            (result) => {
                if (result.status === "200") {
                    localStorage.setItem("token", result.token);
                    dispatch(loginUser(result.user));
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

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
});