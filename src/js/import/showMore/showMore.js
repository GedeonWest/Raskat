const findElements = (object) => {
    const instance = object;
    const { node } = instance;
    const showMoreContent = node.querySelector(".js-more-content");
    const moreText = node.querySelector(".card-more-text");
    const showMoreHolder = [...node.children].find((el) =>
        el.classList.contains("js-more-trigger")
    );
    if (showMoreHolder) {
        instance.button = showMoreHolder;
    } else {
        instance.button = node.querySelector(".js-more-trigger");
    }
    instance.content = showMoreContent;
    instance.text = moreText;
    
};

const onButtonClick = (object) => {
    const instance = object;
    const { node, content, text } = instance;
    node.classList.toggle("js-more--active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        node.style.marginTop = null;
        text.textContent = "Все характеристики";
    } else {
        text.textContent = "Скрыть";
        content.style.maxHeight = content.scrollHeight + "px";
        node.style.marginTop = -content.scrollHeight + "px";
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
