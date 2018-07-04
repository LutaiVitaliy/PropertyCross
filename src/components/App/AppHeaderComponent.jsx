import React from "react";
import s from "./styles.scss";

class AppHeaderComponent extends React.Component {
    render() {
        return <header className={s.appheader}>
            <h2 className={s.maintitle}>Property Cross</h2>
            <button className={s.favBtn}>Favourites</button>
        </header>;
    }
}

export default AppHeaderComponent;