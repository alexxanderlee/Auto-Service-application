import { Link } from 'react-router-dom';
import { useState } from 'react';

import './LogIn.sass';

import { Button } from '../../components';
import { fetchUserLogin } from '../../redux/actions/user';


function LogIn({ dispatch }) {
    const [user, setUser] = useState({
        email: "",
        pswd: ""
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchUserLogin(user));
    };

    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="bg">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="subtitle">Авторизация</h2>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form_group">
                                <input className="form_input" type="email" name="email" placeholder=" " value={user.email} onChange={handleChange} required />
                                <label className="form_label">E-mail</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="password" name="pswd" placeholder=" " value={user.pswd} onChange={handleChange} required />
                                <label className="form_label">Пароль</label>
                            </div>
                            <Button type="submit">Войти</Button>
                        </form>
                        <div className="bottom_text">Еще не зарегистрированы?</div>
                        <Link to="/signup" className="bottom_link">Создайте аккаунт!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;