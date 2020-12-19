import { Link } from 'react-router-dom';
import { useState } from 'react';

import './SignUp.sass';

import { Button } from '../../components';
import { fetchUserSingup } from '../../redux/actions/user';

function SignUp({ dispatch }) {
    const [userInfo, setUserInfo] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        pswd: ""
    });

    const handleChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchUserSingup(userInfo));
    };

    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="bg">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="subtitle">Регистрация</h2>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form_group">
                                <input className="form_input" type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder=" " required />
                                <label className="form_label">Имя</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="text" name="surname" value={userInfo.surname} onChange={handleChange} placeholder=" " required />
                                <label className="form_label">Фамилия</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="tel" name="phone" value={userInfo.phone} onChange={handleChange} placeholder=" " required />
                                <label className="form_label">Телефон</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder=" " required />
                                <label className="form_label">E-mail</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="password" name="pswd" value={userInfo.pswd} onChange={handleChange} placeholder=" " required />
                                <label className="form_label">Пароль</label>
                            </div>
                            <Button type="submit">Регистрация</Button>
                        </form>
                        <div className="bottom_text">Уже зарегистрированы?</div>
                        <Link to="/login" className="bottom_link">Войдите!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;