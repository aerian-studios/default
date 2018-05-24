import React from "react";

export const AnimalLightbox = ({ animal, onClick, visible }) =>
    visible && (
        <div onClick={onClick}>
            <img
                src={animal.image_full}
                style={{
                    backgroundImage: `url(${animal.image_thumb})`
                }}
            />
        </div>
    );
