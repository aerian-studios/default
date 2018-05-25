import React from "react";
import { ListItem } from "../ListItem/ListItem";

export const AnimalList = ({ animals, selectedAnimal, onClick }) => (
    <ul>
        {animals.map(animal => (
            <ListItem
                key={animal.uuid}
                selected={animal.uuid === selectedAnimal.uuid}
                onClick={() => onClick(animal)}
                label={animal.common_name}
            />
        ))}
    </ul>
);
