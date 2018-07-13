import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import FavItem from "./FavItem";
import { connect } from "react-redux";
import { removeFromFavourites } from "../../containers/LocationsList/actions";
import { v1 } from "uuid/";

class FavProperties extends React.Component {
    noFav = () => {
        const favourites = localStorage.favourites ?
            JSON.parse(localStorage.favourites):
            [];
        if (!favourites.length) {
            return (
                <div>
                    <p>No favourites</p>
                </div>
            );
        }
        return null;
    };

    fav = () => {
        const arr = localStorage.favourites ?
            JSON.parse(localStorage.favourites) :
            [];
        if (arr.length) {
            return (
                <div>
                    {arr.map(item => <FavItem key={v1()} item={item} remove={this.props.removeFromFavourites}/>)}
                </div>
            );
        }
        return null;
    };

    render() {
        const favourites = localStorage.favourites ?
            JSON.parse(localStorage.favourites):
            [];
        return (
            <div>
                { favourites.length ? this.fav() : this.noFav() }
                <Link to="/">Back</Link>
            </div>
        )
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