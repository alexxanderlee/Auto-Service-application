import { Route, Switch, Redirect } from 'react-router-dom';

import './Shop.sass';

import { Search, Categories, Products, Product } from '../../components';

function Shop() {

    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="shop_bg">
                <div className="container">
                    <h2 className="title">Каталог автозапчастей</h2>
                    <Search input/>
                    <Switch>
                        <Route path="/shop" component={Categories} exact />
                        <Route path="/shop/categories/" component={Products} exact/>
                        <Route path="/shop/categories/:categoryId" component={Products} exact/>
                        <Route path="/shop/categories/:categoryId/products/:productId" component={Product} exact />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Shop;