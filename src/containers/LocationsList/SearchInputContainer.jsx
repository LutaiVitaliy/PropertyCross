import React from "react";
import s from "../../components/App/styles.scss";
import { loadMoreLocations, setCurrentPlaceName } from "./actions";
import { connect } from "react-redux";

const instructionalText = "Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!"

class SearchInputContainer extends React.Component {
    state = {value: ""};

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    geoSearch = event => {
        event.preventDefault();
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => console.log(position));
        } else {
            console.log("Геолокация Недоступна");
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        const placeName = this.state.value;
        this.props.loadMoreLocations({ placeName });
        this.props.setPlaceName(this.state.value);
    };

    render() {
        return (
            <div className={s.inpCont}>
                <p>{instructionalText}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="search-place" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Go" />
                    <button onClick={this.geoSearch}>My location</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    loadMoreLocations,
    setPlaceName: setCurrentPlaceName
};

export default connect(null, mapDispatchToProps)(SearchInputContainer);