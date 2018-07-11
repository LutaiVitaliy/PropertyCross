import { combineReducers } from "redux";
import Locations from "./Locations";

const rootReducer = combineReducers({
    locations: Locations
});

export default rootReducer;