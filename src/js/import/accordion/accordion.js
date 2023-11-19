const findElements = (object) => {
    const instance = object;
    const { node } = instance;
    const accordionContent = node.querySelector(".js-accordion-content");
    const accordionHolder = [...node.children].find((el) =>
        el.classList.contains("js-accordion-holder")
    );
    if (accordionHolder) {
        instance.button = accordionHolder;
    } else {
        instance.button = node.querySelector(".js-accordion-holder");
    }
    instance.content = accordionContent;
};

const onButtonClick = (object) => {
    const instance = object;
    const { node, content } = instance;
    node.classList.toggle("js-accordion--active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
};


const subscribe = (instance) => {
    const object = instance;
    const { button } = object;
    if (button) {
        button.addEventListener("click", () => onButtonClick(instance));
    }
};

export default (node) => {
    const instance = { node };

    const init = () => {
        findElements(instance);
        subscribe(instance);
    };

    init();
};
