import React from "react";
import s from "./styles.scss";

class SearchResultsComponent extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className={s.resCont}>
                <h2>Search results will be right here!!!</h2>
            </div>
        )
    }
}

export default SearchResultsComponent;