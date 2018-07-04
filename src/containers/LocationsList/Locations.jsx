import React, { Component } from "react";
import { connect } from "react-redux";
import s from "../../components/App/styles.scss";
import { getLocations, loadMoreLocations } from "./actions";
import { Link, Route } from "react-router-dom";
import PropertyDetail from "./property-detail";

class Locations extends Component {
    constructor(props) {
        super(props);

        this.page = 1;

        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    componentDidMount() {
        this.props.getLocations();
    }

    handleLoadMore() {
        this.page++;

        this.props.loadMoreLocations({
            placeName: this.props.placeName,
            page: this.page
        });
    }

    createListItems() {
        if (this.props.locations.list) {
            return this.props.locations.list.map((item, index) => {
                return (
                    <div key={ item.latitude + index } className={s.list} >
                        <img src={item.img_url} width={item.thumb_width} height={item.thumb_height} />
                        <ul className={s.listContainer}>
                            <li>{item.title}</li>
                            <li>Price: {item.price_formatted}</li>
                            <Link to={{
                                pathname: "/details",
                                item
                            }}> Show details </Link>

                        </ul>
                    </div>
                );
            });
        } else {
            return (
            <div>
                Введите локацию для поиска
            </div>
            );
        }
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
    getLocations,
    loadMoreLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);