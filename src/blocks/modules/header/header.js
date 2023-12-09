let burger;
let menu;
let button;
let catalogButton;
let headerCatalog;
let headerNavList;
let catalogTrigers;
let windowWidth;
let buttonBack;

const activeClass = "header-catalog-menu--active";

const findElements = () => {
    burger = document.querySelector(".header-burger");
    menu = document.querySelector(".header-mobile");
    button = document.querySelector(".header-mobile-button");
    burger = document.querySelector(".header-burger");
    headerCatalog = document.querySelector("#headerCatalog");
    catalogButton = document.querySelector("#catalogLink");
    headerNavList = document.querySelector(".header-navigation-list");
    catalogTrigers = document.querySelectorAll(".catalog-trigger");
    buttonBack = document.querySelector(".header-catalog-back");
};

function updateSize() {
    windowWidth = window.innerWidth;
}

const toggleBudy = () => {
    document.querySelector("body").classList.toggle("body--stuck");
    document.querySelector("body").classList.toggle("body--stuck--no-dark");
};

function closeCatalogMenu() {
    headerCatalog.classList.remove(activeClass);
    document.querySelector("body").classList.remove("body--stuck");
}

const handleBackButtonClick = () => {
    headerCatalog.classList.remove(activeClass);
};

const detectOutsideClick = (e) => {
    if (!headerCatalog.contains(e.target) && e.target !== catalogButton) {
        closeCatalogMenu();
    }
};

const toggleCatalogMenu = () => {
    headerCatalog.classList.add(activeClass);
    document.querySelector("body").classList.add("body--stuck");

    if (windowWidth > 1025) {
        window.addEventListener("click", (e) => detectOutsideClick(e));
    }
};

const onButtonClick = () => {
    toggleBudy();
    burger.classList.toggle("header-burger--close");
    menu.classList.toggle("header-mobile--show");
    closeCatalogMenu();
};

function activeLink() {
    let path = document.location.href;
    let links = headerNavList.getElementsByTagName("a");
    for (let i = links.length - 1; i >= 0; i--) {
        if (path.indexOf(links[i].href) != -1) {
            links[i].classList.add("link--active");
            break;
        }
    }
}

const subscribe = () => {
    if (burger) {
        burger.addEventListener("click", () => onButtonClick());
    }

    if (button) {
        button.addEventListener("click", () => onButtonClick());
    }

    if (catalogTrigers) {
        catalogTrigers.forEach((triggerLink) => {
            triggerLink.addEventListener("click", () => toggleCatalogMenu());
        });
    }

    if (buttonBack) {
        buttonBack.addEventListener("click", () => handleBackButtonClick());
    }

    window.onload = activeLink;
    window.addEventListener("resize", updateSize);
};

function init() {
    updateSize();
    findElements();
    subscribe();
}

init();
