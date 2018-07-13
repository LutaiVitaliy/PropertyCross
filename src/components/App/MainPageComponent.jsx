import React from "react";
import AppHeaderComponent from "./AppHeaderComponent";
import MainContainerComponent from "./MainContainerComponent";
import provideScrollPosition from "react-provide-scroll-position";

class MainPageComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { scrollTop: this.props.scrollTop };
    // }
    //
    //
    // componentDidMount() {
    //     const scroll = this.state.scrollTop;
    //     console.log(scroll);
    //     window.scrollTo(0, this.state.scrollTop);
    //     console.log(this.props);
    // }
    //
    // componentWillReceiveProps() {
    //     this.setState({ scrollTop: this.props.scrollTop });
    // }
    render() {
        return (
            <div>
                <AppHeaderComponent />
                <MainContainerComponent />
            </div>
        );
    }
}
export const ComponentWithWindowScrollPosition = provideScrollPosition(MainPageComponent);
