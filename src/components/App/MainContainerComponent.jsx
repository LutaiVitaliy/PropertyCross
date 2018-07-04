import React from "react";
import s from "./styles.scss";
import SearchInputComponent from "../../containers/LocationsList/SearchInputContainer";
import SearchResultContainer from "./SearchResultsComponent";

export default function MainContainerComponent() {
    return (
        <div className={s.mainContainer}>
            <SearchInputComponent />
            <SearchResultContainer />
        </div>
    );
}