import accordion from "./accordion";

let accordions;

const shouldRun = () => document.querySelector(".js-accordion");

const findElements = () => {
    accordions = [...document.querySelectorAll(".js-accordion")];
};

const subscribe = () => {
    accordions.forEach(accordion);
};

export default () => {
    if (!shouldRun()) {
        console.log("fire");
        return;
    }
    findElements();
    subscribe();
};
