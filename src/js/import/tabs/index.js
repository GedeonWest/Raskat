import tab from "./tab";

let tabs;

const shouldRun = () => document.querySelector(".js-tabs");

const findElements = () => {
    tabs = document.querySelectorAll(".js-tabs");
};

const subscribe = () => {
    tabs.forEach(tab);
};

export default () => {
    if (!shouldRun()) {
        return;
    }
    findElements();
    subscribe();
};
