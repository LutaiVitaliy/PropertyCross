import React from "react";
import AppHeaderComponent from "./AppHeaderComponent";
import MainContainerComponent from "./MainContainerComponent";

export default function MainPageContainer() {
    return (
        <div>
            <AppHeaderComponent />
            <MainContainerComponent />
        </div>
    );
}