import { useSelector } from 'react-redux';

import './Cart.sass';

import { Button } from '../../components';

function Cart() {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="cart_bg">
                <div className="cart_wrapper">
                    <div className="cart_title">Корзина</div>
                    <div className="cart_item">
                        <div className="cart_item-wrapper">
                            <img src={process.env.PUBLIC_URL + 'images/tire.png'} alt="pic" className="cart_item-img" />
                            <div className="cart_item-data">
                                <div className="cart_item-data-block1">
                                    <div className="cart_item-name">NOKIAN TS31907 Шина зимняя Nordman 5</div>
                                    <div className="cart_item-remove"></div>
                                </div>
                                <div className="cart_item-data-block2">
                                    <div className="cart_item-amount">
                                        <div className="cart_item-count">
                                            <div className="cart_item-count-minus"></div>
                                            <div className="cart_item-count-number">3</div>
                                            <div className="cart_item-count-plus"></div>
                                        </div>
                                        <div className="cart_item-price">x 1000.00 р.</div>
                                    </div>
                                    <div className="cart_item-fullprice">3 000.00 р.</div>
                                </div>
                            </div>
                        </div>
                        <div className="cart_divider"></div>
                    </div>
                    <div className="cart_btn_div">
                        <Button>Офоримть заказ</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;