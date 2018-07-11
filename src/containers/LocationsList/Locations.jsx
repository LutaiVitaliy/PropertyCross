import React, { Component } from "react";
import { connect } from "react-redux";
import { loadMoreLocations, addToFavourites, removeFromFavourites } from "./actions";
import Item from "./locationItem";
import { v1 } from "uuid";

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 1 };

        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    handleLoadMore() {
        this.setState({ page: this.state.page++ });

        this.props.loadMoreLocations({
            placeName: this.props.locations.currentPlaceName,
            page: this.state.page
        });
    }

    createListItems() {
        if (this.props.locations.currentPlaceName !== "") {
            return this.props.locations.list.map(item =>
                <Item
                    key={v1()}
                    add={this.props.addToFavourites}
                    remove={this.props.removeFromFavourites}
                    item={item}
                />);
        }
        return (
            <div>
                <h3>Enter a location to search for houses buy.</h3>
            </div>
        );
    }

    moreButton() {
        const loadMoreButton = this.props.locations.list.length ? (
            <button onClick={this.handleLoadMore}>
                Show more
            </button>
        ) : (
            null
        );
        return loadMoreButton;
    }

    render() {
        return (
            <div>
                {this.createListItems()}
                {this.moreButton()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        locations: state.locations,
        placeName: state.locations.placeName
    };
}

const mapDispatchToProps = {
    loadMoreLocations,
    addToFavourites,
    removeFromFavourites
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);