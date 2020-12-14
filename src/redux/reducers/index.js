import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import cart from './cart';
import filterProducts from "./filterProducts";


const rootReducer = combineReducers({
  categories,
  products,
  cart,
  filterProducts,
});

export default rootReducer;