import React from "react";
import s from "./styles.scss";
import SearchInputComponent from "./SearchInputComponent";
import SearchResultContainer from "./SearchResultsComponent";

class MainContainerComponent extends React.Component {
    render() {
        return (
            <div className={s.mainContainer}>
                <SearchInputComponent/>
                <SearchResultContainer/>
            </div>
        )
    }
}

export default MainContainerComponent;