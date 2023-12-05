let burger;
let menu;
let button;
let catalogButton;
let headerCatalog;

const findElements = () => {
    burger = document.querySelector(".header-burger");
    menu = document.querySelector(".header-mobile");
    button = document.querySelector(".header-mobile-button");
    burger = document.querySelector(".header-burger");
    headerCatalog = document.querySelector("#headerCatalog");
    catalogButton = document.querySelector("#catalogLink");
};

const toggleBudy = () => {
    document.querySelector("body").classList.toggle("body--stuck");
    document.querySelector("body").classList.toggle("body--stuck--no-dark");
};


const toggleCatalogMenu = () => {
    headerCatalog.classList.toggle("header-catalog-menu--active");
};

const onButtonClick = () => {
    toggleBudy();
    burger.classList.toggle("header-burger--close");
    menu.classList.toggle("header-mobile--show");
};

const subscribe = () => {
    if (burger) {
        burger.addEventListener("click", () => onButtonClick());
    }

    if (button) {
        button.addEventListener("click", () => onButtonClick());
    }

    if (catalogButton) {
        console.log(catalogButton);
        catalogButton.addEventListener("click", () => toggleCatalogMenu());
    }
};

function init() {
    findElements();
    console.log(burger, menu);
    subscribe();
}

init();
