// 4.import constant
import * as types from './../constants/ActionType';
import * as callApi from '../services/apiCaller';

export const actProductRequest = (number) => {
    return (dispatch) => {
        return callApi.call(`/wordpress-demo/wp-json/wc/v3/products?page=${number}`, "GET", null )
        .then(res => {
            dispatch(listProduct(res.data))
        });
    };
};

export const listProduct = (data) => {
    return {
        type : types.LIST_PRODUCT,
        data
    }
};

export const detailProduct = (data) => {
    return {
        type : types.DETAIL_PRODUCT,
        data
    }
};

export const searchProducts = (keyword) => {
    return {
        type : types.SEARCH_PRODUCTS,
        keyword
    }
};

export const relatedProducts = (data) => {
    return {
        type : types.RELATED_PRODUCTS,
        data
    }
};

export const listCategories = (data) => {
    return {
        type : types.LIST_CATEGORIES,
        data
    }
};

