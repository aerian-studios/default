import React from "react";
import styles from "./ListItem.css";
console.log(styles);
export const ListItem = ({ label, selected, onClick }) => (
    <li className={selected ? styles.selected : ""} onClick={onClick}>
        {label}
    </li>
);
