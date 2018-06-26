import {GET_LOCATIONS} from "./constants";
import {RECEIVE_LOCATIONS} from "./constants";

export const getLocations = () => ({
    type: GET_LOCATIONS,
    request: fetch('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=London')

});

export const receiveLocations = (locations) => ({
    type: RECEIVE_LOCATIONS,
    locations: locations
});

export const findLocations = (placeName) => (dispatch) => {
    console.log(placeName);
    return fetch(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${placeName}`)
        .then((response) => response.json())
        .then((json) => dispatch(receiveLocations(json.response.listings)))
};


