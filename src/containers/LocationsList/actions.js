import {GET_LOCATIONS} from "./constants";

export const getLocations = () => ({
    type: GET_LOCATIONS,
    request: fetch('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds')

});
