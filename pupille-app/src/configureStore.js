import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers";
import Root  from './sagas';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
    const create = 
        typeof window !== 'undefined'
        ? (window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore)
        : createStore;

        const middlewares = [sagaMiddleware];

        const createStoreWithMiddleware = applyMiddleware(...middlewares)(create);

        const store = createStoreWithMiddleware(reducer, preloadedState);
        sagaMiddleware.run(Root);

        return store;
}