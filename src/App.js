import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './app.sass';

import { Home, Cart, Shop, Services, LogIn, SignUp, Profile } from './pages';
import { Header, Footer } from './components';
import { fetchProducts } from './redux/actions/products';
import { fetchCategories } from './redux/actions/categories';

function App(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const categoriesIsLoaded = state.categories.isLoaded;
    const productsIsLoaded = state.products.isLoaded;

    useEffect(() => {
        if (!categoriesIsLoaded) {
            dispatch(fetchCategories());
        }
        if (!productsIsLoaded) {
            dispatch(fetchProducts());
        }
    }, []);

    return (
        <div className="app">
            <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/shop" component={Shop} />
                    <Route path="/services" component={Services} exact />
                    <Route path="/login" render={() => <LogIn dispatch={dispatch} />} exact />
                    <Route path="/signup" render={() => <SignUp dispatch={dispatch} />} exact />
                    <Route path="/cart" render={() => <Cart dispatch={dispatch} />} />
                    <Route path="/profile" render={() => (localStorage.getItem('token') ? <Profile dispatch={dispatch} /> : <Redirect to="/login" />)} exact />
                    <Redirect to="/" />
                </Switch>
            <Footer />
        </div>
    );
}

export default App;
