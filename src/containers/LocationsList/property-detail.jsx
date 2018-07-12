import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/App/styles.scss";

function PropertyDetail(props) {
    return (
        <div>
            <div className={styles.detailsHeader}>
                <h2>{props.location.item.title}</h2>
                <h2>Price: {props.location.item.price_formatted}</h2>
                <div className={styles.backBtn}>
                    <Link to="/">Back</Link>
                </div>
            </div>
            <hr />
            <div className={styles.details}>
                <div className={styles.detailsImge}>
                    <img src={props.location.item.img_url} />
                </div>
                <div className={styles.detailsInfo}>
                    <p>{props.location.item.summary}</p><br />
                    <p>Bathroom number: {props.location.item.bathroom_number}</p>
                    <p>Badroom number: {props.location.item.badroom_number}</p>
                    <a href={props.location.item.lister_url} target="_blank">View on official site</a>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetail;