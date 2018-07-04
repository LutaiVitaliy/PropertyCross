import React from "react";
import AppHeaderComponent from "./AppHeaderComponent";
import MainContainerComponent from "./MainContainerComponent";

export default class MainPageContainer extends React.Component {
    render() {
        return (
            <div>
                <AppHeaderComponent />
                <MainContainerComponent />
            </div>
        );
    }
}