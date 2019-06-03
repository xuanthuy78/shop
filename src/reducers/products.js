// import { LIST_PRODUCT } from "./../constants/ActionType";
import * as types from './../constants/ActionType';

var initialState = {
  listProduct: {},
  detailProduct: {}, 
  relatedProducts: {}
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_PRODUCT:
      return {
        ...state,
        listProduct: action.data
      }
    case types.DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: action.data
      }
    case types.RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: action.data
      }
    default: return {...state};
  }
};

export default products;

