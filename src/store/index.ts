import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { CartStateProps } from './modules/Cart/types'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export type StoreState = {
  cart: CartStateProps
}

const sagaMiddlewares = createSagaMiddleware()

const middlewares = [sagaMiddlewares]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddlewares.run(rootSaga)

export default store