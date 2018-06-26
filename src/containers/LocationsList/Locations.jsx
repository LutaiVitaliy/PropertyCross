import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import s from "../../components/App/styles.scss"
import selectProperty from "../../actions/index";
import { getLocations } from "./actions";

class Locations extends Component {
    componentDidMount() {
        this.props.getLocations()
    }

    createListItems() {
        return this.props.locations.list.map((i, index) => {
            return(
                <div key={index} className={s.list} onClick={() => this.props.selectProperty(i)}>
                    <img src={i.img_url} width={i.thumb_width} height={i.thumb_height}/>
                    <ul className={s.listContainer}>
                        <li>{i.title}</li>
                        <li>Price: {i.price_formatted}</li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        return(
            <div >
                {this.createListItems()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        locations: state.locations
    }
}

const mapDispatchToProps = {
    getLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);