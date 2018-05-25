import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AnimalLightbox } from "./AnimalLightbox";
import animals from "../../fixtures/stripes.json";

storiesOf("AnimalLightbox", module)
    .add("Open", () => (
        <AnimalLightbox
            animal={animals[0]}
            onClick={action("clicked")}
            visible={true}
        />
    ))
    .add("Closed", () => (
        <AnimalLightbox
            animal={animals[0]}
            onClick={action("clicked")}
            visible={false}
        />
    ));
