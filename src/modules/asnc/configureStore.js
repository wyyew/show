import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import trunk from 'redux-thunk'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(rootReducer,
      compose(
        applyMiddleware(sagaMiddleware, createLogger, trunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    ),
    runSaga: sagaMiddleware.run
  }
}
