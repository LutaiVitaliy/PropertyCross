import React from "react";
import s from "./styles.scss";
import PropertyElement from "../../index";
import Propertylist from "../../containers/propertylist";

class SearchResultsComponent extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className={s.resCont}>
                <Propertylist/>
            </div>
        )
    }
}

export default SearchResultsComponent;