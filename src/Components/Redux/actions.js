import { ADD_TO_CART, REMOVE_FROM_CART,REMOVE_FROM_CART_BUTTON } from './actionTypes';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId }, 
  };
};
export const removebutton = (productId) => {
  return {
    type: REMOVE_FROM_CART_BUTTON,
    payload: { productId },
  };
};
