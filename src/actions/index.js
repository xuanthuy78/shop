// 4.import constant
import * as types from './../constants/ActionType';

export const listProduct = (data) => {
    return {
        type : types.LIST_PRODUCT,
        data
    }
};
