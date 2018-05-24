import React from "react";
import styles from "./AnimalList.scss";

export const AnimalList = ({ animals, selectedAnimal, onClick }) => (
    <ul className={styles.animalList}>
        {animals.map(animal => (
            <li
                key={animal.uuid}
                className={
                    animal.uuid === selectedAnimal.uuid ? "selected" : ""
                }
                onClick={() => onClick(animal)}
            >
                {animal.common_name}
            </li>
        ))}
    </ul>
);
