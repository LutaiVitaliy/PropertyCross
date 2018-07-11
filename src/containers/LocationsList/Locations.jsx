import React, { Component } from "react";
import { connect } from "react-redux";
import { loadMoreLocations, addToFavourites } from "./actions";
import Item from "./locationItem";

class Locations extends Component {
    constructor(props) {
        super(props);

        this.page = 1;

        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    handleLoadMore() {
        this.page++;

        this.props.loadMoreLocations({
            placeName: this.props.locations.currentPlaceName,
            page: this.page
        });
    }

    createListItems() {
        if (this.props.locations.currentPlaceName !== "") {
            const uuidv1 = require("uuid/v1");
            return this.props.locations.list.map(item => <Item key={uuidv1()} add={this.props.addToFavourites} item={item} />);
        }
        return (
            <div>
                Введите локацию для поиска
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
    addToFavourites
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);