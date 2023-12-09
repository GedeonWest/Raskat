import MicroModal from "micromodal";

let closers;

const findElements = (object) => {
    const instance = object;
    const { node } = instance;
    const submitButton = node.querySelector(".js-submit-modal");
    

    closers = document.querySelectorAll(".success-close");
};

const onSubmit = (e) => {
    e.preventDefault();
    MicroModal.close("modal-call");
    MicroModal.show("modal-success");
};

const onCloseClick = (form) => {
    MicroModal.close("modal-success");
    form.reset();
};


const subscribe = (instance) => {
    const object = instance;
    const { node } = object;
    node.addEventListener("submit", (e) => onSubmit(e));
    console.log(closers);
    closers.forEach((closer) => {
        closer.addEventListener("click", () => onCloseClick(node));
    });

    
};

export default (node) => {
    const instance = { node };

    const init = () => {
        findElements(instance);
        subscribe(instance);
    };

    init();
};
