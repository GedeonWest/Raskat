import SwiperCore from "swiper";
import  { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

let prodSwiperThumb;
let prodSwiper;

function initSliders() {
    prodSwiperThumb = new SwiperCore(".product-swiper-thumb", {
        spaceBetween: 8,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        breakpoints: {
            320: {
                slidesPerView: 5,
                // spaceBetween: gapMobile,
                direction: "horizontal"
            },
            768: {
                // spaceBetween: gapMobile,
                slidesPerView: 5,
                direction: "horizontal"
            },
            1025: {
                slidesPerView: 4,
            },
            1319: {
                slidesPerView: 5,
            },
            1920: {
                slidesPerView: 5,
            },
        },
    });
    prodSwiper = new SwiperCore(".product-swiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: prodSwiperThumb,
        },
    });

    console.log(prodSwiper);
}

initSliders();
