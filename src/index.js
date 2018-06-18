import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore} from "redux";
import {Provider} from "react-redux";

function loadJSONP(src, completeCallback) {
    window.onGetData = function(res) {
        if (completeCallback) {
            completeCallback(res['response'])
        } else {
            console.log('completeCallback function is not defined');
        }
    };

    const elem = document.createElement("script");
    elem.src = src;
    document.head.appendChild(elem);
}

const testSRC = "https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds&callback=onGetData";




loadJSONP(testSRC,(response) => {
    console.log(response)
});

function propertyList(state = [], action) {
    if (action.type === "ADD_ELEMENT") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(propertyList);
window.store = store;
//
// store.subscribe(() => {console.log("subscribe", store.getState())});
//
store.dispatch({type: "ADD_ELEMENT", payload: "New element"});
store.dispatch({type: "ADD_ELEMENT", payload: "Another element"});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
    );