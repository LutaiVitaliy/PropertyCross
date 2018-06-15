import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import s from "./styles.scss";
import AppHeader from "../../containers/AppHeader";
import MainContainer from "../../containers/MainContainer";

const App = () => (
    <Router>
        <div className={s.container}>
            <AppHeader/>
            <MainContainer/>
            {/*<ul>*/}
                {/*<li><Link to="/chiron">Chiron</Link></li>*/}
                {/*<li><Link to="/centenario">Centenario</Link></li>*/}
                {/*<li><Link to="/laferrari">LaFerrari</Link></li>*/}
            {/*</ul>*/}

            {/*<hr/>*/}

            {/*<Route path="/chiron" component={Chiron}/>*/}
            {/*<Route path="/centenario" component={Centenario}/>*/}
            {/*<Route path="/laferrari" component={LaFerrari}/>*/}
        </div>
    </Router>
);

export default App;