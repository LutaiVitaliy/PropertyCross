import {GET_LOCATIONS, RECEIVE_LOCATIONS} from "../containers/LocationsList/constants";

const initialState = {
    list: []
};

export default function Locations(state = initialState, action) {
    switch (action.type) {
        // case GET_LOCATIONS:
        // {
        //     return {...state, list: action.payload.response.listings}
        // }
        case RECEIVE_LOCATIONS:
        {
            return {...state, list: action.locations}
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