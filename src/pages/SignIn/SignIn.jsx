import { Link } from 'react-router-dom';

import './SignIn.sass';

import { Button } from '../../components';

function SignIn() {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="bg">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="subtitle">Регистрация</h2>
                        <form action="" className="form">
                            <div className="form_group">
                                <input className="form_input" type="text" name="firstName" required placeholder=" " />
                                <label className="form_label">Имя</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="text" name="secondName" required placeholder=" " />
                                <label className="form_label">Фамилия</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="tel" name="phone" required placeholder=" " />
                                <label className="form_label">Телефон</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="email" name="email" required placeholder=" " />
                                <label className="form_label">E-mail</label>
                            </div>
                            <div className="form_group">
                                <input className="form_input" type="password" name="password" required placeholder=" " />
                                <label className="form_label">Пароль</label>
                            </div>
                            <Button onClickAction={() => alert("Go!")}>Регистрация</Button>
                        </form>
                        <div className="bottom_text">Уже зарегистрированы?</div>
                        <Link to="/login" className="bottom_link">Войдите!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;