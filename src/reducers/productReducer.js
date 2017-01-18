import { product } from './initialState';
import * as a from '..actions/actionTypes';

export default function productReducer(state = product, action) {
  switch(action.type) {
    case a.GET_PRODUCT:
        return {
          ...state,
          loading: true
        };
    case a.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        snglProduct: action.payload.product,
        loading: false,
        error: null
      };
    case a.GET_PRODUCT_FAILURE:
      return {
        ...state,
        snglProduct: null,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}