import React from "react";
import s from "../components/App/styles.scss";
import SearchInputContainer from "./SearchInputContainer";
import SearchResultContainer from "./SearchResultsContainer";

class MainContainer extends React.Component {
    render() {
        return (
            <div className={s.mainContainer}>
                <SearchInputContainer/>
                <SearchResultContainer/>
            </div>
        )
    }
}

export default MainContainer;