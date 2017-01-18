import * as action from './actionCreators';

// all products
export const getAllProducts = () => ({
    type: actions.GET_PRODUCTS
});

export const getAllProductsSuccess = (products) => ({
    type: actions.GET_PRODUCTS_SUCCESS,
    payload: { products }
});

export const getAllProductsFailure = (error) => ({
    type: actions.GET_PRODUCTS_FAILURE,
    payload: { error }
});

// single product
export const getSingleProduct = () => ({
    type: actions.GET_SINGLE_PRODUCT
});

export const getSingleProductSuccess = (product) => ({
    type: actions.GET_SINGLE_PRODUCT_SUCCESS,
    payload: { product }
});

export const getSingleProductFailure = (error) => ({
    type: actions.GET_SINGLE_PRODUCT_FAILURE,
    payload: { error }
});
 
