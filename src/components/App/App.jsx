import React from 'react';
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

export default App;