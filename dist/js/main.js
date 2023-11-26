/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/catalog/catalog.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/catalog/catalog.js ***!
  \***********************************************/
/***/ (() => {

var filterHolder;
var filterToggler;
var closeButton;
var shouldRun = function shouldRun() {
  return document.querySelector("#filterHolder");
};
var findElements = function findElements() {
  filterHolder = document.querySelector("#filterHolder");
  filterToggler = document.querySelector(".js-filter-toggler");
  closeButton = filterHolder.querySelector(".js-filter-close");
};
var toggleBudy = function toggleBudy() {
  document.querySelector("body").classList.toggle("body--stuck");
};
var openFilters = function openFilters() {
  filterHolder.classList.add("catalog-filter-mobile--open");
  toggleBudy();
};
var hideFilters = function hideFilters() {
  filterHolder.classList.remove("catalog-filter-mobile--open");
  toggleBudy();
};
var onCloseClick = function onCloseClick() {
  hideFilters();
};
var subscribe = function subscribe() {
  filterToggler.addEventListener("click", openFilters);
  closeButton.addEventListener("click", onCloseClick);
};
var run = function run() {
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

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs]);
var contactsSwiper;
function initSliders() {
  contactsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".contacts-swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  console.log(contactsSwiper);
}
initSliders();

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

var burger;
var menu;
var button;
var findElements = function findElements() {
  burger = document.querySelector(".header-burger");
  menu = document.querySelector(".header-mobile");
  button = document.querySelector(".header-mobile-button");
};
var toggleBudy = function toggleBudy() {
  document.querySelector("body").classList.toggle("body--stuck");
  document.querySelector("body").classList.toggle("body--stuck--no-dark");
};
var onButtonClick = function onButtonClick() {
  toggleBudy();
  burger.classList.toggle("header-burger--close");
  menu.classList.toggle("header-mobile--show");
};
var subscribe = function subscribe() {
  if (burger) {
    burger.addEventListener("click", function () {
      return onButtonClick();
    });
  }
  if (button) {
    button.addEventListener("click", function () {
      return onButtonClick();
    });
  }
};
function init() {
  findElements();
  console.log(burger, menu);
  subscribe();
}
init();

/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
  openTrigger: "data-micromodal-trigger",
  closeTrigger: "data-custom-close",
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: false
});

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs]);
var prodSwiperThumb;
var prodSwiper;
function initSliders() {
  prodSwiperThumb = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".product-swiper-thumb", {
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
        slidesPerView: 4
      },
      1319: {
        slidesPerView: 5
      },
      1920: {
        slidesPerView: 5
      }
    }
  });
  prodSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".product-swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: prodSwiperThumb
    }
  });
  console.log(prodSwiper);
}
initSliders();

/***/ }),

/***/ "./src/js/import/accordion/accordion.js":
/*!**********************************************!*\
  !*** ./src/js/import/accordion/accordion.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var findElements = function findElements(object) {
  var instance = object;
  var node = instance.node;
  var accordionContent = node.querySelector(".js-accordion-content");
  var accordionHolder = _toConsumableArray(node.children).find(function (el) {
    return el.classList.contains("js-accordion-holder");
  });
  if (accordionHolder) {
    instance.button = accordionHolder;
  } else {
    instance.button = node.querySelector(".js-accordion-holder");
  }
  instance.content = accordionContent;
};
var onButtonClick = function onButtonClick(object) {
  var instance = object;
  var node = instance.node,
    content = instance.content;
  node.classList.toggle("js-accordion--active");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
};
var subscribe = function subscribe(instance) {
  var object = instance;
  var button = object.button;
  if (button) {
    button.addEventListener("click", function () {
      return onButtonClick(instance);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (node) {
  var instance = {
    node: node
  };
  var init = function init() {
    findElements(instance);
    subscribe(instance);
  };
  init();
});

/***/ }),

/***/ "./src/js/import/accordion/index.js":
/*!******************************************!*\
  !*** ./src/js/import/accordion/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./src/js/import/accordion/accordion.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var accordions;
var shouldRun = function shouldRun() {
  return document.querySelector(".js-accordion");
};
var findElements = function findElements() {
  accordions = _toConsumableArray(document.querySelectorAll(".js-accordion"));
};
var subscribe = function subscribe() {
  accordions.forEach(_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  if (!shouldRun()) {
    console.log("fire");
    return;
  }
  findElements();
  subscribe();
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./src/js/import/accordion/index.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range */ "./src/js/import/range/index.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ "./src/js/import/tabs/index.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery */ "./src/js/import/gallery/index.js");

"./accordion/index";



// import slider from "./sliders";

(0,_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_range__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_gallery__WEBPACK_IMPORTED_MODULE_3__["default"])();
// slider();

/***/ }),

/***/ "./src/js/import/gallery/index.js":
/*!****************************************!*\
  !*** ./src/js/import/gallery/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fslightbox__WEBPACK_IMPORTED_MODULE_0__);

var gallery;
var shouldRun = function shouldRun() {
  return document.querySelector("[data-fslightbox=\"gallery\"]");
};
var findElements = function findElements() {
  gallery = document.querySelector("[data-fslightbox=\"gallery\"]");
};
var subscribe = function subscribe() {
  gallery = fslightbox__WEBPACK_IMPORTED_MODULE_0___default()();
  gallery.open();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  if (!shouldRun()) {
    return;
  }
  findElements();
  subscribe();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/catalog/catalog */ "./src/blocks/modules/catalog/catalog.js");
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");







/***/ }),

/***/ "./src/js/import/range/index.js":
/*!**************************************!*\
  !*** ./src/js/import/range/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ "./src/js/import/range/range.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var rangeSliders;
var shouldRun = function shouldRun() {
  return document.querySelector(".js-range");
};
var findElements = function findElements() {
  rangeSliders = _toConsumableArray(document.querySelectorAll(".range-holder"));
};
var subscribe = function subscribe() {
  rangeSliders.forEach(_range__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  if (!shouldRun()) {
    return;
  }
  findElements();
  subscribe();
});

/***/ }),

/***/ "./src/js/import/range/range.js":
/*!**************************************!*\
  !*** ./src/js/import/range/range.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");

var findElements = function findElements(object) {
  var _instance$range, _instance$range2, _instance$range3;
  var instance = object;
  var node = instance.node;
  instance.range = node.querySelector(".js-range");
  instance.minValue = Number((_instance$range = instance.range) === null || _instance$range === void 0 || (_instance$range = _instance$range.dataset) === null || _instance$range === void 0 ? void 0 : _instance$range.min);
  instance.maxValue = Number((_instance$range2 = instance.range) === null || _instance$range2 === void 0 || (_instance$range2 = _instance$range2.dataset) === null || _instance$range2 === void 0 ? void 0 : _instance$range2.max);
  instance.step = Number((_instance$range3 = instance.range) === null || _instance$range3 === void 0 || (_instance$range3 = _instance$range3.dataset) === null || _instance$range3 === void 0 ? void 0 : _instance$range3.step) || 1;
  instance.inputs = node.querySelectorAll("input");
  instance.counts = node.querySelectorAll(".range-count");
};
var createSliders = function createSliders(instance) {
  var object = instance;
  var minValue = object.minValue,
    maxValue = object.maxValue,
    range = object.range;
  nouislider__WEBPACK_IMPORTED_MODULE_0__["default"].create(range, {
    start: [minValue, maxValue],
    step: 1,
    connect: true,
    range: {
      "min": [minValue],
      "max": [maxValue]
    }
  });
};
var setValues = function setValues(instance) {
  var object = instance;
  var range = object.range,
    inputs = object.inputs,
    counts = object.counts;
  range.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
    counts[handle].innerHTML = Math.round(values[handle]);
  });
};
var subscribe = function subscribe(instance) {
  var object = instance;
  createSliders(object);
  setValues(object);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (node) {
  var instance = {
    node: node
  };
  var init = function init() {
    findElements(instance);
    subscribe(instance);
  };
  init();
});

/***/ }),

/***/ "./src/js/import/tabs/index.js":
/*!*************************************!*\
  !*** ./src/js/import/tabs/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/js/import/tabs/tab.js");

var tabs;
var shouldRun = function shouldRun() {
  return document.querySelector(".js-tabs");
};
var findElements = function findElements() {
  tabs = document.querySelectorAll(".js-tabs");
};
var subscribe = function subscribe() {
  tabs.forEach(_tab__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  if (!shouldRun()) {
    return;
  }
  findElements();
  subscribe();
});

/***/ }),

/***/ "./src/js/import/tabs/tab.js":
/*!***********************************!*\
  !*** ./src/js/import/tabs/tab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var shouldRun = function shouldRun(_ref) {
  var node = _ref.node;
  return node.querySelector(".js-tabs-block__tab");
};
var TAB_ACTIVE_CLASS = "tabs-block__tab--active";
var TAB_CONTAINER = "js-tab-content";
var TAB_CONTAINER_ACTIVE_CLASS = "tab-content--active";
var findElements = function findElements(obj) {
  var instance = obj;
  var node = instance.node;
  instance.tabs = node.querySelectorAll(".js-tabs-block__tab");
};
var tabRemoveClass = function tabRemoveClass(tab) {
  tab.classList.remove(TAB_ACTIVE_CLASS);
};
var tabContainerAddClass = function tabContainerAddClass(tabContainer) {
  tabContainer.classList.add(TAB_CONTAINER_ACTIVE_CLASS);
};
var tabContainerRemoveClass = function tabContainerRemoveClass(tabContainer) {
  tabContainer.classList.remove(TAB_CONTAINER_ACTIVE_CLASS);
};
var showTab = function showTab(instance, tab) {
  var obj = instance;
  var tabs = instance.tabs,
    activeTabName = instance.activeTabName,
    containers = instance.containers;
  tabs.forEach(tabRemoveClass);
  tab.classList.add(TAB_ACTIVE_CLASS);
  containers[activeTabName].forEach(tabContainerRemoveClass);
  var name = tab.dataset.name;
  containers[name].forEach(tabContainerAddClass);
  obj.activeTabName = name;
};
var initTabs = function initTabs(object) {
  var instance = object;
  var tabs = instance.tabs;
  instance.containers = {};
  instance.activeTabName = "";
  tabs.forEach(function (tab) {
    var name = tab.dataset.name;
    if (name) {
      var selector = ".".concat(TAB_CONTAINER, "[data-name=").concat(name, "]");
      instance.containers[name] = document.querySelectorAll(selector);
      tab.addEventListener("click", function () {
        showTab(instance, tab);
      });
      if (tab.classList.contains(TAB_ACTIVE_CLASS)) {
        instance.activeTabName = name;
      }
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (node) {
  var instance = {
    node: node
  };
  if (shouldRun(instance)) {
    findElements(instance);
    initTabs(instance);
  }
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map