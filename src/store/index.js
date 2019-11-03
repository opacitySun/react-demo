import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga'
import { watcher } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcher)
export default store;
