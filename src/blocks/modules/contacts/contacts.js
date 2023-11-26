import SwiperCore from "swiper";
import  { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

let contactsSwiper;

function initSliders() {
    contactsSwiper = new SwiperCore(".contacts-swiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    console.log(contactsSwiper);
}

initSliders();
