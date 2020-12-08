import { Link } from 'react-router-dom';

import './LogIn.sass';

import { Button } from '../../components';

function LogIn() {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="bg">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="subtitle">Авторизация</h2>
                        <form action="" className="form">
                            <div className="form_group">
                                <input className="form_input" type="email" name="email" required placeholder=" " />
                                <label className="form_label">E-mail</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="password" name="password" required placeholder=" " />
                                <label className="form_label">Пароль</label>
                            </div>
                            <Button onClickAction={() => alert("Go!")}>Войти</Button>
                        </form>
                        <div className="bottom_text">Еще не зарегистрированы?</div>
                        <Link to="/signin" className="bottom_link">Создайте аккаунт!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;