import { combineReducers } from 'redux';
import products from './products';
import searchProducts from './searchProducts';

const appReducers = combineReducers({
    products,
    searchProducts
});

export default appReducers;