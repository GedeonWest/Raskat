let burger;
let menu;
let button;

const findElements = () => {
    burger = document.querySelector(".header-burger");
    menu = document.querySelector(".header-mobile");
    button = document.querySelector(".header-mobile-button");
};

const toggleBudy = () => {
    document.querySelector("body").classList.toggle("body--stuck");
    document.querySelector("body").classList.toggle("body--stuck--no-dark");
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
};

function init() {
    findElements();
    console.log(burger, menu);
    subscribe();
}

init();
