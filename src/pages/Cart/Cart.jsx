import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Cart.sass';

import { Button } from '../../components';
import { removeProductFromCart, decreaseProduct, increaseProduct } from '../../redux/actions/cart';
import { emptyCart } from '../../assets/images';

function Cart({ dispatch }) {
    const items = useSelector((state) => state.cart.items);
    const totalCount = useSelector((state) => state.cart.totalCount);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    if (totalCount > 0) {
        const handleRemoveProduct = (id) => {
            if (window.confirm('Вы действительно хотите удалить товар?')) {
                dispatch(removeProductFromCart(id));
            }
        };
    
        const handleDecreaseProduct = (id) => {
            dispatch(decreaseProduct(id));
        };
    
        const handleIncreaseProduct = (id) => {
            dispatch(increaseProduct(id));
        };
        
        return (
            <div className="content">
                <div className="header_bg"></div>
                <div className="cart_bg">
                    <div className="cart_wrapper">
                        <div className="cart_title">Корзина</div>
                        {items && Object.keys(items).map((key) => {
                            const { obj, count, fullPrice } = items[key];
                            const { id, img, name, price } = obj;
    
                            return (
                                <div key={id} className="cart_item">
                                    <div className="cart_item-wrapper">
                                        <img src={process.env.PUBLIC_URL + img} alt="pic" className="cart_item-img" />
                                        <div className="cart_item-data">
                                            <div className="cart_item-data-block1">
                                                <div className="cart_item-name">{name}</div>
                                                <div className="cart_item-remove" onClick={() => handleRemoveProduct(id)}></div>
                                            </div>
                                            <div className="cart_item-data-block2">
                                                <div className="cart_item-amount">
                                                    <div className="cart_item-count">
                                                        <div className="cart_item-count-minus" onClick={() => handleDecreaseProduct(id)}></div>
                                                        <div className="cart_item-count-number">{count}</div>
                                                        <div className="cart_item-count-plus" onClick={() => handleIncreaseProduct(id)}></div>
                                                    </div>
                                                    <div className="cart_item-price">x {price} р.</div>
                                                </div>
                                                <div className="cart_item-fullprice">{fullPrice} р.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart_divider"></div>
                                </div>
                            );
                        })}
                        <div className="cart_footer">
                            <div className="cart_footer-string">
                                <div className="cart_footer-label">Общее количество: </div>
                                <div className="cart_footer-value">{totalCount} шт.</div>
                            </div>
                            <div className="cart_footer-string">
                                <div className="cart_footer-label">Общая стоимость: </div>
                                <div className="cart_footer-value">{totalPrice} р.</div>
                            </div>
                        </div>
                        <div className="cart_btn_div">
                            <Button>Офоримть заказ</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="cart_bg">
                <div className="cart_wrapper">
                    <img className='cart_empty_image' src={emptyCart} alt="empty cart"/>
                    <div className="cart_title">Ваша корзина пуста</div>
                    <div className="cart_empty_text">Ознакомиться с ассортиментом нашего магазина вы можете в каталоге!</div>
                    <Link to="/shop"><Button>В каталог</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;