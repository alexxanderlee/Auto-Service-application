import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.sass';

import { logoSvg } from '../../assets/images';

function Header() {
    useEffect(() => {
        const header = document.querySelector("header");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("header_sticky");
            } else {
                header.classList.remove("header_sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
            header.classList.remove("header");
        };
    }, []);

    return (
        <header>
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_logo">
                        <Link to="/">
                            <img src={logoSvg} alt="Car repair" className="header_logo-img" />
                        </Link>
                    </div>
                    <nav>
                        <ul className="menu">
                            <li className="menu_item">
                                <NavLink to="/" className="menu_link" activeClassName="active" exact>Главная</NavLink>
                            </li>
                            <li className="menu_item">
                                <NavLink to="/shop" className="menu_link" activeClassName="active">Магазин</NavLink> 
                            </li>
                            <li className="menu_item">
                                <NavLink to="/services" className="menu_link" activeClassName="active">Услуги</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="user_menu">
                        <ul className="menu">
                            <li className="menu_item">
                                <NavLink to="/login" className="menu_link" activeClassName="active">Вход</NavLink>
                            </li>
                            <li className="menu_item">
                                <a href="!#" className="menu_link">Корзина</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;