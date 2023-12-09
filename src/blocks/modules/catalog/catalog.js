let filterHolder;
let filterToggler;
let closeButton;

const shouldRun = () => document.querySelector("#filterHolder");

const findElements = () => {
    filterHolder = document.querySelector("#filterHolder");
    filterToggler = document.querySelector(".js-filter-toggler");
    closeButton = filterHolder.querySelector(".js-filter-close");
};

const stuckBudy = () => {
    document.querySelector("body").classList.add("body--stuck");
};

const unStuckBudy = () => {
    document.querySelector("body").classList.remove("body--stuck");
};

const hideFilters = () => {
    filterHolder.classList.remove("catalog-filter-mobile--open");
    unStuckBudy();
};

const detectOutsideClick = (e) => {
    console.log(e.target);
    if (!filterHolder.contains(e.target) && e.target !== filterToggler) {
        hideFilters();
    }
};

const openFilters = () => {
    filterHolder.classList.add("catalog-filter-mobile--open");
    stuckBudy();
    window.addEventListener("click", (e) => detectOutsideClick(e));
};

  
const onCloseClick = () => {
    hideFilters();
};



const subscribe = () => {
    filterToggler.addEventListener("click", openFilters);
    closeButton.addEventListener("click", onCloseClick);
};

const run = () => {
    if (!shouldRun()) {
        return;
    }
    findElements();
    subscribe();
};

run();

// if (!shouldRun()) {
//     return;
// } else {
//     console.log(document.querySelector("#filterHolder"), "holder");
//     findElements();
//     subscribe();
// }
