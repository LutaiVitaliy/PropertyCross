import React from "react";
import { Link } from "react-router-dom";
import s from "../../components/App/styles.scss";

export default function Item(props) {
    const favButton = item => {
        const filteredArr = JSON.parse(localStorage.favourites).filter(e => e.title === item.title);
        if (!filteredArr[0]) {
            return (
                <button onClick={ () => props.add(props.item)} >Add to favourites</button>
            );
        } return (
            <button onClick={() => props.remove(props.item)}>Remove from favourites</button>
        );
    };

    return (
        <div className={s.list} >
            <img src={props.item.img_url} width={props.item.thumb_width * 1.5} height={props.item.thumb_height * 1.5} />
            <ul className={s.listContainer}>
                <li>{props.item.title}</li>
                <li>Price: {props.item.price_formatted}</li>
                <Link to={{ pathname: "/details", item: { ...props.item } }}>Show details </Link>
                {favButton(props.item)}
            </ul>
        </div>
    );
}