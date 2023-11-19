import noUiSlider from "nouislider";

const findElements = (object) => {
    const instance = object;
    const { node } = instance;
    instance.range = node.querySelector(".js-range");
    instance.minValue = Number(instance.range?.dataset?.min);
    instance.maxValue = Number(instance.range?.dataset?.max);
    instance.step = Number(instance.range?.dataset?.step) || 1;

    instance.inputs = node.querySelectorAll("input");
    instance.counts = node.querySelectorAll(".range-count");
};

const createSliders = (instance) => {
    const object = instance;
    const { minValue, maxValue, range} = object;
    noUiSlider.create(range, {
        start: [minValue, maxValue],
        step: 1,
        connect: true,
        range: {
            "min": [minValue],
            "max": [maxValue]
        }
    });
};

const setValues = (instance) => {
    const object = instance;
    const {range, inputs, counts} = object;
    range.noUiSlider.on("update", function( values, handle ) {
        inputs[handle].value = Math.round(values[handle]);
        counts[handle].innerHTML = Math.round(values[handle]);
    });
};

const subscribe = (instance) => {
    const object = instance;
    createSliders(object);
    setValues(object);
};

export default (node) => {
    const instance = { node };

    const init = () => {
        findElements(instance);
        subscribe(instance);
    };

    init();
};
