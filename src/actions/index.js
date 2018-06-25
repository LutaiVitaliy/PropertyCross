const selectProperty = (property) => {
    console.log(`Summary: ${property.summary}`);
    return {
        type: "PROPERTY_SELECTED",
        payload: property
    }
};

// export const getLocations = () => {
//     return {
//            type: "GET_LOCATIONS",
//         payload: fetch('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds')
//             .then(res => res.json())
//     }
// };

export default selectProperty;