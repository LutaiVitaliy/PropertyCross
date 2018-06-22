import {combineReducers} from "redux";
import propertyState from "./contentReducer";
import ActivePropertyReducer from "./reducer-active-property"

const rootReducer = combineReducers({
    propertylist: propertyState,
    activeProperty: ActivePropertyReducer
});

export default rootReducer;