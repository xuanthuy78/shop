// import { LIST_PRODUCT } from "./../constants/ActionType";
import * as types from '../constants/ActionType';

var initialState = "";

const searchProducts = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_PRODUCTS:
      return action.keyword;
    default: return state;
  }
};

export default searchProducts;

