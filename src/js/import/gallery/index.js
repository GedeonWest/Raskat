import fslightbox from "fslightbox";

let gallery;

const shouldRun = () => document.querySelector("[data-fslightbox=\"gallery\"]");

const findElements = () => {
    gallery = document.querySelector("[data-fslightbox=\"gallery\"]");
};

const subscribe = () => {
    gallery = fslightbox();
    gallery.open();
};

export default () => {
    if (!shouldRun()) {
        return;
    }
    findElements();
    subscribe();
};