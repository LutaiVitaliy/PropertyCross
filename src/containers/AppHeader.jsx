import React from "react";
import s from   "../components/App/styles.scss"

class AppHeader extends React.Component {
    render() {
        return <header className={s.appheader}>
            <h2 className={s.maintitle}>Property Cross</h2>
            <button className={s.favBtn}>Favourites</button>
        </header>
    }
}

export default AppHeader;