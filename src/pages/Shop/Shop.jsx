import { Route } from 'react-router-dom';

import './Shop.sass';

import { Search, Categories, Products, Product } from '../../components';

function Shop({ match }) {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="shop_bg">
                <div className="container">
                    <h2 className="title">Каталог автозапчастей</h2>
                    <Search />
                    <Route path={`${match.url}`} component={Categories} exact />
                    <Route path={`${match.url}/categories/:categoryId`} component={Products} exact/>
                    <Route path={`${match.url}/products/:productId`} component={Product} exact />
                </div>
            </div>
        </div>
    );
}

export default Shop;