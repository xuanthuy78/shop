import * as types from './../constants/ActionType';

var initialState = {
  listCategories: {}
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_CATEGORIES:
      return {
        ...state,
        listCategories: action.data
      }
    default: return {...state};
  }
};

export default categories;

