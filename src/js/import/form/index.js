import form from "./forms";

let forms;

const shouldRun = () => document.querySelector(".js-call-form");

const findElements = () => {
    forms = [...document.querySelectorAll(".js-call-form")];
};

const subscribe = () => {
    forms.forEach(form);
};

export default () => {
    if (!shouldRun()) {
        return;
    }
    findElements();
    subscribe();
};
