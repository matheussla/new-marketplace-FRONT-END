import produce from 'immer';
import types from './types';
const INITIAL_STATE = {
  customer: {},
  shops: [],
  shop: {},
  cart: []
};

function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.customer = action.customer;
      });
    }
    case types.SET_SHOPS: {
      return produce(state, (draft) => {
        draft.shops = action.shops;
      });
    }
    case types.SET_SHOP: {
      return produce(state, (draft) => {
        draft.shop = action.shop;
      });
    }
    case types.TOGGLE_CART_PRODUCT: {
      return produce(state, (draft) => {
        const index = state.cart.findIndex((p) => p.id === action.product.id);
        if (index === -1) {
          draft.cart.push(action.product);
        } else {
          draft.cart.splice(index, 1);
        }

      });
    }
    default: {
      return state;
    }
  }
}

export default shop;