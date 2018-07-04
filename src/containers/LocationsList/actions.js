import { APPEND_LIST, SET_CURRENT_PLACE_NAME, GET_LOCATIONS, RECEIVE_LOCATIONS } from "./constants";

export const getLocations = () => ({
    type: GET_LOCATIONS,
    request: fetch("http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=London")
});

export const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations
});

export function appendList(list) {
    return {
        type: APPEND_LIST,
        list
    };
}

export function setCurrentPlaceName(name) {
    return {
        type: SET_CURRENT_PLACE_NAME,
        placeName: name
    };
}

export const findLocations = placeName => dispatch => {
    fetch(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${placeName}`)
    .then(response => response.json())
    .then(json => dispatch(receiveLocations(json.response.listings)));
};

export const loadMoreLocations = ({ placeName, page }) => dispatch => {
    fetch(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${page}&place_name=${placeName}`)
        .then(response => response.json())
        .then(json => dispatch(appendList(json.response.listings)));
};
