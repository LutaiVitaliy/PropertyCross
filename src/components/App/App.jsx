import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import s from "./styles.scss";
import PropertyDetail from "../../containers/LocationsList/property-detail";
import MainPageComponent from "./MainPageComponent";
import FavProperties from "./FavPropertiesPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={s.container}>
                    <Route exact path="/" component={MainPageComponent} />
                    <Route path="/details" component={PropertyDetail} />
                    <Route path="/favourites" component={FavProperties} />
                </div>
            </Router>
        );
    }
}

export default App;