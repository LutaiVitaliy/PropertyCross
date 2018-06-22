import React from 'react';
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import s from "./styles.scss";
import AppHeaderComponent from "./AppHeaderComponent";
import MainContainerComponent from "./MainContainerComponent";
import SearchResultsComponent from "./SearchResultsComponent";
import Propertylist from "../../containers/propertylist";
import PropertyDetail from "../../containers/property-detail"

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={s.container}>
                    <AppHeaderComponent/>
                    <MainContainerComponent/>
                    <PropertyDetail/>
                </div>
            </Router>
        )
    }
}

export default App;