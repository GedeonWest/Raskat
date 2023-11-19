import range from "./range";

let rangeSliders;

const shouldRun = () => document.querySelector(".js-range");

const findElements = () => {
    rangeSliders = [...document.querySelectorAll(".range-holder")];
};

const subscribe = () => {
    rangeSliders.forEach(range);
};

export default () => {
    if (!shouldRun()) {
        return;
    }
    findElements();
    subscribe();
};
