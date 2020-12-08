import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './app.sass';

import { Home, Shop, Services, LogIn, SignIn, NoMatchPage } from './pages';
import { Header, Footer } from './components';
import { setCategories } from './redux/actions/categories';
import { setProducts } from './redux/actions/products';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((respose) => respose.json())
            .then(data => {
                dispatch(setCategories(data.categories));
                dispatch(setProducts(data.products));
            });
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/shop" component={Shop} />
                    <Route path="/services" component={Services} exact />
                    <Route path="/login" component={LogIn} exact />
                    <Route path="/signin" component={SignIn} exact />
                    <Route component={NoMatchPage} />
                </Switch>
            <Footer />
        </div>
    );
}

export default App;
