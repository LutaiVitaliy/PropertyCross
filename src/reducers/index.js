import {combineReducers} from "redux";
import propertyState from "./Locations";
import ActivePropertyReducer from "./reducer-active-property";
import Locations from "./Locations";

const rootReducer = combineReducers({
    locations: Locations
});

export default rootReducer;