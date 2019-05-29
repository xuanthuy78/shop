// import { LIST_PRODUCT } from "./../constants/ActionType";
import * as types from './../constants/ActionType';

var initialState = {
  listProduct: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_PRODUCT:
      return {
        ...state,
        listProduct: action.data
      }
    default: return {...state};
  }
};

export default products;

