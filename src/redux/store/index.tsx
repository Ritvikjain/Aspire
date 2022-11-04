import { applyMiddleware, createStore, compose, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

let middlewares: any = [reduxThunk];
const loggerMiddleware = createLogger();
middlewares = [...middlewares, loggerMiddleware];
let enhancer = compose(applyMiddleware(...middlewares));

const store: Store = createStore(reducers, enhancer);

export default store;
