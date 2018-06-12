import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import s from "./styles.scss";

const Chiron = () => (
    <div>
        <img
            src="https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-16079f29b2d0a3b56208fa6268aeb23d.jpg"
            alt="Chiron"
        />
        <h2>Bugatti Chiron</h2>
    </div>
);

const Centenario = () => (
    <div>
        <img
            src="http://bm.img.com.ua/berlin/storage/1100x999999/c/b3/1411784eb9ce400b83a5c2e16566fb3c.jpg"
            alt="Centenario"
        />
        <h2>Lamborghini Centenario</h2>
    </div>
);

const LaFerrari = () => (
    <div>
        <img
            src="http://www.hypercar.info/media/djcatalog2/images/item/0/ferrari-laferrari.3_f.jpg"
            alt="LaFerrari"
        />
        <h2>Ferrari LaFerrari</h2>
    </div>
);

const Cars = () => (
    <Router>
        <div className={s.container}>
            <ul>
                <li><Link to="/chiron">Chiron</Link></li>
                <li><Link to="/centenario">Centenario</Link></li>
                <li><Link to="/laferrari">LaFerrari</Link></li>
            </ul>

            <hr/>

            <Route path="/chiron" component={Chiron}/>
            <Route path="/centenario" component={Centenario}/>
            <Route path="/laferrari" component={LaFerrari}/>
        </div>
    </Router>
);
export default Cars

// class App extends Component {
//     render() {
//         return (
//             <div className={s.container}>
//                 <h1>My React App!</h1>
//             </div>
//         );
//     }
// }
//
// export default App;