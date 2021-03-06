import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { requestMiddleware } from "../middlewares/requestMiddleware";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

const enchancer = compose(
    applyMiddleware(reduxThunk, requestMiddleware, reduxLogger)
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), enchancer);

    if (module.hot) {
        module.hot.accept("../reducers", () => {
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
};

