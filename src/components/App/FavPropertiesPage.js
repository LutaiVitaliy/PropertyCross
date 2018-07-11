import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import FavItem from "./FavItem";
import { connect } from "react-redux";
import { removeFromFavourites } from "../../containers/LocationsList/actions";
import { v1 } from "uuid/";

class FavProperties extends React.Component {
    render() {
        if (localStorage.favourites) {
            const arr = JSON.parse(localStorage.favourites);
            return (
                <div>
                    {arr.map(item => <FavItem key={v1()} item={item} remove={this.props.removeFromFavourites}/>)}
                    <Link to="/" >Back</Link>
                </div>
            );
        }

        return (
            <div>
                <div>
                    <p>No favourites</p>
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