import SwiperCore from "swiper";
import  { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

let slidesPerView;
let slidesPerViewDesktop;
let slidesPerViewWide;
let slidesPerViewMobile;
let slidesPerViewTablet;
let loop;
let thumbs;
let direction;
let directionMobile;

console.log("fire top");

export default function init(container) {
    ({
        slidesPerView = 1,
        slidesPerViewMobile = 1,
        slidesPerViewDesktop = 3,
        slidesPerViewWide = 5,
        slidesPerViewTablet = 4,
        loop,
        thumbs,
        direction = "horizontal",
        directionMobile = "horizontal",
    } = container.dataset);
    console.log(container.dataset);
    const gap = container.dataset.gap || 0;
    const gapMobile = container.dataset.mobilegap || 0;
    let instance = { container };
    const shouldLoop = loop && container.firstElementChild.childElementCount > 1;
    // eslint-disable-next-line no-new
    instance.swiper = new SwiperCore(container, {
        slidesPerView,
        spaceBetween: 0,
        shouldLoop,
        direction,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: thumbs,
        },
        breakpoints: {
            320: {
                slidesPerView: slidesPerViewMobile || 1,
                spaceBetween: gapMobile,
                direction: directionMobile,
            },
            1025: {
                slidesPerView: slidesPerViewTablet,
                spaceBetween: gapMobile,
                direction: directionMobile,
            },
            1319: {
                slidesPerView: slidesPerViewDesktop,
                spaceBetween: gap,
            },
            1920: {
                slidesPerView: slidesPerViewWide,
                spaceBetween: gap,
            },
        },
    });

    if (instance.swiper.slides.length < 2) {
        instance.swiper.el.classList.add("swiper-single-image");
    }

    function destroy() {
        instance.swiper.destroy();
        instance = null;
    }

    return { instance, destroy };
}
