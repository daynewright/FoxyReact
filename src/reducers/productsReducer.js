import initialState from './initialState';
import * as a from '../actions/actionTypes';

export default function productsReducers(state = initialState.products, action) {
  switch(action.type) {
    case a.GET_PRODUCTS:
      return {
          ...state,
          loading: true
      };
    case a.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsArray: [...action.payload],
        loading: false,
        error: null
      };
    case a.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        productsArray: [],
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
