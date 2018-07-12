import {
    ADD_TO_FAVOURITES,
    APPEND_LIST,
    RECEIVE_LOCATIONS,
    REMOVE_FROM_FAVOURITES,
    SET_CURRENT_PLACE_NAME
} from "../containers/LocationsList/constants";

const favourites = JSON.parse(localStorage.getItem("favourites"));

const initialState = {
    list: [],
    currentPlaceName: "",
    favourites
};

export default function Locations(state = initialState, action) {
    switch (action.type) {

        case RECEIVE_LOCATIONS:  {
            return { ...state, list: action.locations || initialState.list };
        }
        case SET_CURRENT_PLACE_NAME: {
            return { ...state, currentPlaceName: action.placeName };
        }
        case APPEND_LIST: {
            return { ...state, list: [...state.list, ...action.list] };
        }
        case ADD_TO_FAVOURITES: {
            return { ...state, favourites: action.favourites };
        }
        case REMOVE_FROM_FAVOURITES: {
            return { ...state, favourites: action.favourites };
        }
        default: return state;
    }
}