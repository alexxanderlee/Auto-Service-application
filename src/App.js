import { Route } from 'react-router-dom';

import './app.sass';

import { Home, Catalog } from './pages';
import { Header, Footer } from './components';

function App() {
    return (
        <div className="app">
            <Header />
            <Route path="/" component={Home} exact />
            <Route path="/shop" component={Catalog} exact />
            <Footer />
        </div>
    );
}

export default App;
