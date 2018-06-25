import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { requestMiddleware } from "../middlewares/requestMiddleware";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk, reduxLogger, requestMiddleware));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
};

