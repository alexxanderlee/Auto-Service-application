import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Products.sass';

function Products({ match }) {
    const { categoryId } = match.params;
    
    const products = useSelector(({ products }) =>
        products.filter(product => Number(product.categoryId) === Number(categoryId))
    );
    console.log(products)

    return (
        <div className="products">
            {products && products.map(({ id, name, price, img }) => {
                return (
                    <Link key={id} className="products_item" to={'/shop/products/' + id}>
                        <img src={process.env.PUBLIC_URL + '/images/' + img} alt="pic" className="products_item-img" />
                        <div className="products_item-name">{name}</div>
                        <div className="products_item-price">от {price} р.</div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Products;