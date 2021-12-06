import types from './types';

export function setCustomer(customer) {
  return { type: types.SET_CUSTOMER, customer }
}

export function setProduct(product) {
  return { type: types.SET_PRODUCT, product }
}

export function requestShops() {
  return { type: types.REQUEST_SHOPS }
}


export function setShops(shops) {
  return { type: types.SET_SHOPS, shops }
}

export function setShopMapSelected(petshop) {
  return { type: types.SET_PETSHOPS_MAP_SELECTED, petshop }
}

export function setMapCenter(location) {
  return { type: types.SET_MAP_CENTER, location }
}

export function requestShop(id) {
  return { type: types.REQUEST_SHOP, id }
}

export function setShop(shop) {
  return { type: types.SET_SHOP, shop }
}

export function toggleCartProduct(product) {
  return { type: types.TOGGLE_CART_PRODUCT, product }
}