import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import s from "./styles.scss";
import PropertyDetail from "../../containers/LocationsList/property-detail";
import MainPageContainer from "./MainPageComponent";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={s.container}>
                    <Route exact path="/" component={MainPageContainer} />
                    <Route path="/details" component={PropertyDetail} />
                </div>
            </Router>
        );
    }
}

export default App;