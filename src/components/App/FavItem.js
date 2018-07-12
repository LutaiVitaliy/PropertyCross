import React from "react";
import styles from "../../components/App/styles.scss";

export default function FavItem(props) {
    return (
        <div className={styles.list}>
            <img src={props.item.img_url} width={props.item.thumb_width * 1.5 } height={props.item.thumb_height * 1.5 } />
            <div>
                <p>{props.item.title}</p>
                <p>{props.item.price_formatted}</p>
            </div>
            <button onClick={() => props.remove(props.item)}>Remove from favourites</button>
        </div>
    );
}