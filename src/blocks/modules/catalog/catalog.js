let filterHolder;
let filterToggler;
let closeButton;

const shouldRun = () => document.querySelector("#filterHolder");

const findElements = () => {
    filterHolder = document.querySelector("#filterHolder");
    filterToggler = document.querySelector(".js-filter-toggler");
    closeButton = filterHolder.querySelector(".js-filter-close");
};

const toggleBudy = () => {
    document.querySelector("body").classList.toggle("body--stuck");
};

const openFilters = () => {
    filterHolder.classList.add("catalog-filter-mobile--open");
    toggleBudy();
};

const hideFilters = () => {
    filterHolder.classList.remove("catalog-filter-mobile--open");
    toggleBudy();
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
