import slider from "./slider";

const SWIPER_CLASS = ".swiper-container";

let instances = [];

function shouldRun() {
    return document.querySelector(SWIPER_CLASS);
}

// function shouldInitInstance(node) {
//     const { enable } = node.dataset;
//     const { isNarrow, isDesktop } = resize.request();
//     return (
//         (enable === "mobile" && isNarrow) ||
//     (enable === "desktop" && isDesktop) ||
//     !enable
//     );
// }

function initInstance(node) {
    slider(node);
    return {};
}

function initInstances(nodes) {
    instances = nodes.map(initInstance);
}

function destroySwiper(swiperContainer) {
    const index = instances.findIndex(
        ({ container }) => container === swiperContainer
    );
    if (index >= 0) {
        instances[index].destroy();
        instances.splice(index, 1);
    }
}

export function destroyFromContainer(container) {
    if (container) {
        const swipers = [...container.querySelectorAll(SWIPER_CLASS)];
        if (swipers.length) {
            swipers.forEach(destroySwiper);
        }
    }
}

function initSwiper(node) {
    instances.push(initInstance(node));
}

export function initFromContainer(container) {
    if (container) {
        const swipers = [...container.querySelectorAll(SWIPER_CLASS)];
        if (swipers.length) {
            swipers.forEach(initSwiper);
        }
    }
}


export default function init() {
    if (shouldRun()) {
        const containers = [...document.querySelectorAll(SWIPER_CLASS)];
        initInstances(containers);
    }
}
