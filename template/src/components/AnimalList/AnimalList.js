import React from "react";

export const AnimalList = ({ animals, selectedAnimal, onClick }) => (
    <ul>
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
