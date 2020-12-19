import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import cart from './cart';
import user from './user';
import filterProducts from "./filterProducts";

const rootReducer = combineReducers({
  categories,
  products,
  cart,
  user,
  filterProducts,
});

export default rootReducer;