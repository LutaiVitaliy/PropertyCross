import React from "react";
import s from "./styles.scss";
import Propertylist from "../../containers/LocationsList/Locations";

class SearchResultsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.resCont}>
                <Propertylist />
            </div>
        );
    }
}

export default SearchResultsComponent;