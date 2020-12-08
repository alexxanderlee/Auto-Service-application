import { useSelector } from 'react-redux';

import './Product.sass';

import { Button } from '../../components';

function Product({ match }) {
    const { productId } = match.params;

    const { img, name, type, price, manufacturer } = useSelector(({ products }) =>
        products.find(product => Number(product.id) === Number(productId))
    );

    return (
        <div className="product_wrapper">
            <div className="product_details">
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/' + img} alt="pic" className="product_img"/>
                </div>
                <table>
                    <tr>
                        <th>Название</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th>Тип</th>
                        <td>{type}</td>
                    </tr>
                    <tr>
                        <th>Цена</th>
                        <td>От {price} р.</td>
                    </tr>
                    <tr>
                        <th>Производитель</th>
                        <td>{manufacturer}</td>
                    </tr>
                </table>
            </div>
            <Button>В корзину</Button>
        </div>
    );
}

export default Product;