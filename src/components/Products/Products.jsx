import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Products.sass';


function Products({ match }) {
    const { categoryId } = match.params;

    const products = useSelector((state) =>
        (categoryId != null)?
            state.products.items.filter(product => Number(product.categoryId) === Number(categoryId)):
            state.products.items
    );




    //живой поиск


    return (
        <div className="products">
            {products && products.map(({ id, categoryId, name, price, img }) => {
                return (
                    <Link key={id} className="products_item" to={'/shop/categories/' + categoryId + '/products/' + id}>
                        <img src={process.env.PUBLIC_URL + img} alt="pic" className="products_item-img" />
                        <div className="products_item-name">{name}</div>
                        <div className="products_item-price">от {price} р.</div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Products;