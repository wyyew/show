import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/reducers'
import createSagaMiddleware from 'redux-saga'
// import sagaMonitor from '../sagaMonitor'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger)),
    runSaga: sagaMiddleware.run
  }
}
