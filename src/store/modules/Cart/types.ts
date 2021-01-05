export type Product = {
  id: number;
  title: string;
  price: number;
}

export type CartItem = {
  product: Product;
  quantity: number;
}

export type CartStateProps = {
  items: CartItem[];
  failedStockCheck: number[];
}

export type AddProductToCartRequestAction = {
  type: "ADD_PRODUCT_TO_CART_REQUEST",
  payload: {
    product: Product
  }
}

export type AddProductToCartSuccessAction = {
  type: "ADD_PRODUCT_TO_CART_SUCCESS",
  payload: {
    product: Product
  }
}

export type AddProductToCartFailureAction = {
  type: "ADD_PRODUCT_TO_CART_FAILURE",
  payload: {
    productId: number
  }
}

export type CartActions = AddProductToCartRequestAction | AddProductToCartSuccessAction | AddProductToCartFailureAction
