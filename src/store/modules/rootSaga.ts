import {all} from 'redux-saga/effects'

import cart from './Cart/sagas'

export default function* rootSaga(): any {
  return yield all([
    cart,
  ])
}