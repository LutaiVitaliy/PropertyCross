import {combineReducers} from "redux";

const initialState = {
    "bathroom_number": 2,
    "bedroom_number": 2,
    "car_spaces": 0,
    "commission": 0,
    "construction_year": 0,
    "datasource_name": "OnTheMarket.com",
    "img_height": 300,
    "img_url": "https://imgs.nestimg.com/2_bedroom_house_for_sale_109466415959145070.jpg",
    "img_width": 400,
    "keywords": "",
    "latitude": 53.8299,
    "lister_url": "https://www.nestoria.co.uk/detail/0000000109466415959145070/title/5/1-15?serpUid=&pt=1&ot=1&l=leeds&did=105_high1&utm_source=api&utm_medium=external",
    "listing_type": "buy",
    "location_accuracy": 9,
    "longitude": -1.59203,
    "price": 215000,
    "price_currency": "£",
    "price_formatted": "£215,000",
    "price_high": 215000,
    "price_low": 215000,
    "property_type": "house",
    "size": 0,
    "size_type": "net",
    "summary": "Newly renovated two bedroom apartment to let. This two bed two bath...",
    "thumb_height": 60,
    "thumb_url": "https://imgs.nestimg.com/medium/2_bedroom_house_for_sale_109466415959145070.jpg",
    "thumb_width": 80,
    "title": "Carisbrooke Road, Headingley, Leeds",
    "updated_in_days": 1,
    "updated_in_days_formatted": "new!"
};

export default function propertystate(state = initialState) {
    return state;
};