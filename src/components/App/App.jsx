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

class App extends React.Component {
render() {
    console.log(this.props);
    return (
        <Router>
            <div className={s.container}>
                <AppHeaderComponent/>
                <MainContainerComponent/>
            </div>
        </Router>
    )
}
}

function mapStateToProps (state) {
    return {
        property: state
    }
}

export default connect(mapStateToProps)(App)