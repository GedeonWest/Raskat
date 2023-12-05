import showMore from "./showMore";

let moreHolders;

const shouldRun = () => document.querySelector(".js-more-holder");

const findElements = () => {
    moreHolders = [...document.querySelectorAll(".js-more-holder")];
};

const subscribe = () => {
    moreHolders.forEach(showMore);
};

export default () => {
    if (!shouldRun()) {
        console.log("fire");
        return;
    }
    findElements();
    subscribe();
};
