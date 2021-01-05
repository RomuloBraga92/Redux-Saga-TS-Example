import { Product, CartActions } from "./types";

export function addProductToCartRequest(product: Product): CartActions{
  return{
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product
    }
  }
}

export function addProductToCartSuccess(product: Product): CartActions{
  return{
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(productId: number): CartActions{
  return{
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: {
      productId,
    }
  }
}
