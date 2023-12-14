
let anchors;

const shouldRun = () => document.querySelector(".js-anchor");

function findElements() {
    anchors = [].slice.call(document.querySelectorAll(".js-anchor"));
}

function tryScroll(target) {
    const id = target.getAttribute("href").split("#")[1];

    const element = document.querySelector(`#${id}`);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function onClick(event, instance) {
    event.preventDefault();
    const { target } = event;
    tryScroll(target, instance);
}

function initAnchor(anchor) {
    anchor.addEventListener("click", (event) => onClick(event));
}

function initAnchors() {
    anchors.forEach(initAnchor);
}

export default function init() {
    if (!shouldRun()) {
        return;
    }
    findElements();
    initAnchors();
}
