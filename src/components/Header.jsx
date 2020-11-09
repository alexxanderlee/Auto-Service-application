import { useEffect } from 'react';

import logoSvg from '../assets/images/logo.svg';

function Header() {
    useEffect(() => {
        const header = document.querySelector(".header");
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
        };
    }, []);

    return (
        <header>
        <div className="header">
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_logo">
                        <a href="!#" className="header_logo-link">
                            <img src={logoSvg} alt="Car repair" className="header_logo-img" />
                        </a>
                    </div>
                    <nav>
                        <ul className="menu">
                            <li className="menu_item">
                                <a href="!#" className="menu_link active">Главная</a>
                            </li>
                            <li className="menu_item">
                                <a href="!#" className="menu_link">Магазин</a>
                            </li>
                            <li className="menu_item">
                                <a href="#services" className="menu_link">Услуги</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="user_menu">
                        <ul className="menu">
                            <li className="menu_item">
                                <a href="!#" className="menu_link">Вход</a>
                            </li>
                            <li className="menu_item">
                                <a href="!#" className="menu_link">Корзина</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </header>
    );
}

export default Header;