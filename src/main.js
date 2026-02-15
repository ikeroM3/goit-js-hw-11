import {featchImg} from "./js/pixabay-api";
import { AddGallery } from "./js/render-functions";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements.searchQuery.value;
    if (inputValue === '') {
        return;
    }
    featchImg(inputValue).then(images => {
        AddGallery(images);
    });
}   