import React from "react";

import styles from "./AnimalLightbox.scss";

export const AnimalLightbox = ({ animal, onClick, visible }) =>
    visible && (
        <div className={styles.lightbox} onClick={onClick}>
            <img
                src={animal.image_full}
                style={{
                    backgroundImage: `url(${animal.image_thumb})`
                }}
            />
        </div>
    );
