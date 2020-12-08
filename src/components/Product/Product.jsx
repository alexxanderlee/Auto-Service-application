import { useSelector } from 'react-redux';

import './Product.sass';

import { Button } from '../../components';
import { fetchProducts } from '../../redux/actions/products';

function Product({ match }) {
    const { productId } = match.params;

    const productsIsLoaded = useSelector((state) => state.products.isLoaded);

    const product = useSelector(({ products }) =>
        products.items.find(product => Number(product.id) === Number(productId))
    );

    let content;

    if (productsIsLoaded) {
        const { img, name, type, price, manufacturer } = product;

        content = (
            <div className="product_wrapper">
                <div className="product_details">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/' + img} alt="pic" className="product_img"/>
                    </div>
                    <table>
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
                <Button>В корзину</Button>
            </div>
        );
    } else {
        content = (<div></div>);
    }

    return (
        <div className="content">
            {content}
        </div>
    );
}

export default Product;