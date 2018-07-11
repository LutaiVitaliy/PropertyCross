import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import FavItem from "./FavItem";
import { connect } from "react-redux";
import { removeFromFavourites } from "../../containers/LocationsList/actions";
import { v1 } from "uuid/";

class FavProperties extends React.Component {
    constructor(props) {
        super(props);
    }

    noFav = () => {
       if (localStorage.favourites.length < 3) {
            return (
                <div>
                    <div>
                        <p>No favourites</p>
                    </div>
                </div>
            );
        }
        return null;
    };

    fav = () => {
        const arr = JSON.parse(localStorage.favourites);
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
        return (
            <div>
                {this.fav()}
                {this.noFav()}
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