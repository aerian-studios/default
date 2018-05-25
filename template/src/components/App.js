import React, { Component } from "react";
import { AnimalDetail } from "./AnimalDetail/AnimalDetail";
import { AnimalList } from "./AnimalList/AnimalList";
import { AnimalLightbox } from "./AnimalLightbox/AnimalLightbox";

export default class App extends Component {
    state = {
        animals: [],
        selectedAnimal: null,
        lightboxAnimal: null
    };

    componentDidMount() {
        this.loadAnimals();
    }

    loadAnimals = async () => {
        const response = await fetch(
            "//api.jsonbin.io/b/5afc5c68c2e3344ccd96b97c/1"
        );
        const animals = await response.json();

        if (animals.length) {
            this.setState({ animals, selectedAnimal: animals[0] });
        }
    };

    chooseAnimal = animal => {
        this.setState({ selectedAnimal: animal });
    };

    openLightbox = () =>
        this.setState({
            lightboxAnimal: this.state.selectedAnimal
        });

    closeLightbox = () => this.setState({ lightboxAnimal: null });

    render() {
        const { selectedAnimal, animals, lightboxAnimal } = this.state;

        return (
            <div>
                <div id="sidebar">
                    <AnimalList
                        animals={animals}
                        selectedAnimal={selectedAnimal}
                        onClick={this.chooseAnimal}
                    />
                </div>
                <div id="detail">
                    <AnimalDetail
                        animal={selectedAnimal}
                        onOpenImage={this.openLightbox}
                    />
                </div>
                <AnimalLightbox
                    visible={!!lightboxAnimal}
                    animal={lightboxAnimal}
                    onClick={this.closeLightbox}
                />
            </div>
        );
    }
}
