import { combineReducers } from 'redux';
import products from './products';
import searchProducts from './searchProducts';
import categories from './categories';

const appReducers = combineReducers({
    products,
    searchProducts,
    categories
});

export default appReducers;