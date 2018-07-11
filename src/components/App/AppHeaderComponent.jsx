import React from "react";
import s from "./styles.scss";
import { Link } from "react-router-dom";

export default function AppHeaderComponent() {
    return (
        <header className={s.appheader}>
            <h2 className={s.maintitle}>Property Cross</h2>
            <Link to="/favourites">
                <button className={s.favBtn}>Favourites</button>
            </Link>
        </header>
    );
}

