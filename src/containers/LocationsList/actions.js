import { APPEND_LIST, SET_CURRENT_PLACE_NAME, RECEIVE_LOCATIONS, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./constants";

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

function addItem(item) {
    const arr = localStorage.favourites ?
        JSON.parse(localStorage.favourites) : [];
    arr.push(item);
    localStorage.favourites = JSON.stringify(arr);
    return JSON.parse(localStorage.favourites);
}

export function addToFavourites(item) {
    return {
        type: ADD_TO_FAVOURITES,
        favourites: addItem(item)
    };
}

function remove(currentFavItem) {
    const arr = JSON.parse(localStorage.favourites);
    const filteredArr = arr.filter(favItem => favItem.title !== currentFavItem.title);
    localStorage.favourites = JSON.stringify(filteredArr);
    return JSON.parse(localStorage.favourites);
}

export function removeFromFavourites(item) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        favourites: remove(item)
    };
}

export const loadMoreLocations = ({ placeName, page = 1 }) => dispatch => {
    fetch(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${page}&place_name=${placeName}`)
        .then(response => response.json())
        .then(json => json.response.listings)
        .then(listings => dispatch(
            page === 1 ?
                receiveLocations(listings) :
                appendList(listings)
            )
        );
};
