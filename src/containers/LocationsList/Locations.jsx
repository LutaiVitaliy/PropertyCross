import React, {Component} from "react";
import {connect} from "react-redux";
import s from "../../components/App/styles.scss"
import { getLocations, loadMoreLocations } from "./actions";

class Locations extends Component {
    constructor(props) {
        super(props);

        this.page = 1;

        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    componentDidMount() {
        this.props.getLocations()
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
            return this.props.locations.list.map((i, index) => {
                return (
                    <div key={index} className={s.list} onClick={() => this.props.selectProperty(i)}>
                        <img src={i.img_url} width={i.thumb_width} height={i.thumb_height}/>
                        <ul className={s.listContainer}>
                            <li>{i.title}</li>
                            <li>Price: {i.price_formatted}</li>
                        </ul>
                    </div>
                )
            })
        } else {
            return (
            <div>
                Введите локацию для поиска
            </div>
            )
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
        return(
            <div>
                <div >
                    {this.createListItems()}
                </div>
                <div>
                    {this.moreButton()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        locations: state.locations,
        placeName: state.locations.placeName
    }
}

const mapDispatchToProps = {
    getLocations,
    loadMoreLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);