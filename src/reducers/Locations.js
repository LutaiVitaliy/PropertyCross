import {
    APPEND_LIST,
    RECEIVE_LOCATIONS,
    SET_CURRENT_PLACE_NAME
} from "../containers/LocationsList/constants";

const initialState = {
    list: [],
    currentPlaceName: ""
};

export default function Locations(state = initialState, action) {
    switch (action.type) {

        case RECEIVE_LOCATIONS:
        {
            return {...state, list: action.locations}
        }
        case SET_CURRENT_PLACE_NAME:
        {
            return {...state, placeName: action.placeName}
        }
        case APPEND_LIST:
        {
            return {...state, list: [...state.list, ...action.list]}
        }

        default: return state;
    }


}



// function propList(state, action) {
//     if (action.type === "ELEMENTS_LIST") {
//         return {...state, proplist: action.payload}
//     } else {
//         return state
//     }
// }