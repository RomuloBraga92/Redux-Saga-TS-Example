import { AxiosResponse } from 'axios'
import {all, takeLatest, select, call, put} from 'redux-saga/effects'

import { StoreState } from '../..'
import api from '../../../services/api'
import { addProductToCartFailure, addProductToCartSuccess } from './actions'
import { AddProductToCartRequestAction } from './types'

export type StockResponse = {
  id: number;
  quantity: number;
}

function* checkProductStock({payload}: AddProductToCartRequestAction){
  const {product} = payload

  const currentQuantity: number = yield select((state: StoreState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  const availableStockResponse: AxiosResponse<StockResponse> = yield call(api.get, `/stock/${product.id}`)

  if(availableStockResponse.data.quantity > currentQuantity){

    yield put(addProductToCartSuccess(product))

  } else {

    yield put(addProductToCartFailure(product.id))
    
  }

  console.log(currentQuantity)
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])