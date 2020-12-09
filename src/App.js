import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './app.sass';

import { Home, Cart, Shop, Services, LogIn, SignIn } from './pages';
import { Header, Footer } from './components';
import { fetchProducts } from './redux/actions/products';
import { fetchCategories } from './redux/actions/categories';

function App() {
    const dispatch = useDispatch();
    const categoriesIsLoaded = useSelector((state) => state.categories.isLoaded);
    const productsIsLoaded = useSelector((state) => state.products.isLoaded);

    useEffect(() => {
        if (!categoriesIsLoaded) {
            dispatch(fetchCategories());
        }
        if (!productsIsLoaded) {
            dispatch(fetchProducts());
        }
    }, [categoriesIsLoaded, productsIsLoaded, dispatch]);

    return (
        <div className="app">
            <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/shop" component={Shop} />
                    <Route path="/services" component={Services} exact />
                    <Route path="/login" component={LogIn} exact />
                    <Route path="/signin" component={SignIn} exact />
                    <Route path="/cart" component={Cart} />
                    <Redirect to="/" />
                </Switch>
            <Footer />
        </div>
    );
}

export default App;
