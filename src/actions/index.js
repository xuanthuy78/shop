// 4.import constant
import * as types from './../constants/ActionType';

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
