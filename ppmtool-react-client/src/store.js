import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleWare from 'redux-saga';



const initialState = {

};


const sagaMiddleware = createSagaMiddleWare();

const middleware = [sagaMiddleware];

function* rootSaga() { };

function returnDevTools() {
    if (process.env.NODE_ENV === 'development') {
        return window.devToolsExtension ? window.devToolsExtension() : f => f;
    }
    return null;
}


const store =
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, compose(applyMiddleware(...middleware)))
        : createStore(
            rootReducer,
            compose(
                applyMiddleware(...middleware),
                returnDevTools()
            )
        );

sagaMiddleware.run(rootSaga);

export default store;


