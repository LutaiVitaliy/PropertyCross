import React from "react";
import s from "./styles.scss"
import PropertyDetail from "../../reducers/reducer-active-property";
import {findLocations, setCurrentPlaceName} from "../../containers/LocationsList/actions";
import {connect} from "react-redux";

const instructionalText = "Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!"

class SearchInputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.findLocations(this.state.value);
        this.props.setPlaceName(this.state.value)
    }

    render() {
        return (
            <div className={s.inpCont}>
                <p>{instructionalText}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="search-place" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Go" />
                    <button>My location</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    findLocations: findLocations,
    setPlaceName: setCurrentPlaceName
};

export default connect(null, mapDispatchToProps)(SearchInputContainer);