import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore"

const store = configureStore();

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