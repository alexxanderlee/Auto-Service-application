import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import cart from './cart';
import user from './user';

const rootReducer = combineReducers({
  categories,
  products,
  cart,
  user,
});

export default rootReducer;