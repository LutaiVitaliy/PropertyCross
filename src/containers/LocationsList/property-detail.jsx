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
            <hr/>
            <div className={styles.details}>
                <div className={styles.detailsImge}>
                    <img src={props.location.item.img_url} />
                </div>
                <div className={styles.detailsInfo}>
                    <span>{props.location.item.summary}</span><br/><br />
                    <span>Bathroom number: {props.location.item.bathroom_number}</span><br/>
                    <span>Badroom number: {props.location.item.badroom_number}</span>
                </div>
            </div>
        </div>

    );
}

export default PropertyDetail;