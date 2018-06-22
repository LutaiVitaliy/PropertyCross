import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore"
import propertyState from "./reducers/index";

const store = configureStore(propertyState);


// function loadJSONP(src, completeCallback) {
//     window.onGetData = function(res) {
//         if (completeCallback) {
//             completeCallback(res['response'])
//         } else {
//             console.log('completeCallback function is not defined');
//         }
//     };
//
//     const elem = document.createElement("script");
//     elem.src = src;
//     document.head.appendChild(elem);
// }
//
// const testSRC = "https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds&callback=onGetData";
//
//
//
//
// loadJSONP(testSRC,(response) => {
//     console.log(response)
// });

fetch('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds')
    .then(res => res.json())
    .then(body => store.dispatch({type: "ELEMENTS_LIST", payload: body}));

//const locations = store.body;

class PropertyElement extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <img src={store.body.listings[0].img_url}/>
            </div>
        )
    }
}

export default PropertyElement;

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
    );