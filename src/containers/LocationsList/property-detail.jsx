import React from "react";
import {connect} from "react-redux";
import s from "../../components/App/styles.scss"

class PropertyDetail extends React.Component {

    render() {
        return(
            <div >
                <img src={this.props.selectedProperty.img_url} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedProperty: state.activeProperty
    }
}

export default connect(mapStateToProps)(PropertyDetail)