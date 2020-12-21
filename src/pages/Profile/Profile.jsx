import { useSelector } from "react-redux";
import { useEffect } from 'react';

import './Profile.sass';

import { Button } from '../../components';
import { profilePng } from '../../assets/images';
import { logoutUser, fetchRemoveOrder, fetchGetOrders } from '../../redux/actions/user';

function Profile({ dispatch }) {
    const state = useSelector(state => state);
    const { name, surname, email, phone } = state.user.currentUser;
    const orders = state.user.orders;
    const products = state.products.items;

    useEffect(() => {
        dispatch(fetchGetOrders());
    }, []);

    const handleLogOut = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logoutUser());
        }
    };

    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="profile_bg">
                <div className="container">
                    <div className="profile_wrapper">
                        <img src={profilePng} alt="pic" className="profile_img"/>
                        <div className="profile_user-data">
                            <div className="profile_user-name">{`${name} ${surname}`}</div>
                            <div className="profile_user-string">
                                <div className="profile_user-label">E-mail </div>
                                <div className="profile_user-value">{email}</div>
                            </div>
                            <div className="profile_user-string">
                                <div className="profile_user-label">Телефон </div>
                                <div className="profile_user-value">{phone}</div>
                            </div>
                        </div>
                        <Button onClickAction={handleLogOut}>Выйти</Button>
                        <div className="profile_orders">
                            <div className="profile_orders-title">Текущие заказы</div>
                            {(orders.length > 0)
                                ? products.length > 0 && orders.map(({ id, spareId, quantity, amount }) => {
                                    const { img: productImg, name: productName, price: productPrice } = products.find(product => Number(product.id) === Number(spareId));

                                    const handleRemoveOrder = () => {
                                        if (window.confirm('Вы действительно хотите отменить заказ?')) {
                                            dispatch(fetchRemoveOrder(id));
                                        }
                                    };

                                    return (
                                        <div className="profile_order" key={id}>
                                            <img src={process.env.PUBLIC_URL + productImg} alt="pic" className="profile_order-img" />
                                            <div className="profile_order-data">
                                                <div className="profile_order-data-block1">
                                                    <div className="profile_order-name">{productName}</div>
                                                    <div className="profile_order-remove" onClick={() => handleRemoveOrder()}></div>
                                                </div>
                                                <div className="profile_order-data-block2">
                                                    <div className="profile_order-amount">{quantity} шт. x {productPrice} р.</div>
                                                    <div className="profile_order-fullprice">{amount} р.</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                                : <div>Заказы отсутствуют</div> }               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;