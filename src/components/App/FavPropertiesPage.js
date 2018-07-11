import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import FavItem from "./FavItem";
import {connect} from "react-redux";
import {removeFromFavourites} from "../../containers/LocationsList/actions";

class FavProperties extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (localStorage.favourites) {
            const arr = JSON.parse(localStorage.favourites);
            const uuidv1 = require("uuid/v1");
            return (
                <div>
                    {arr.map(item => <FavItem key={uuidv1()} item={item} remove={this.props.removeFromFavourites}/>)}
                    <Link to="/" >Back</Link>
                </div>
            );
        }

        return (
            <div>
                <div>
                    No favourites
                </div>
                <Link to="/" >Back</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        favourites: state.locations.favourites
    };
}

const mapDispatchToProps = {
    removeFromFavourites
};

export default connect(mapStateToProps, mapDispatchToProps)(FavProperties);