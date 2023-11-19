const shouldRun = ({ node }) => node.querySelector(".js-tabs-block__tab");

const TAB_ACTIVE_CLASS = "tabs-block__tab--active";
const TAB_CONTAINER = "js-tab-content";
const TAB_CONTAINER_ACTIVE_CLASS = "tab-content--active";

const findElements = (obj) => {
    const instance = obj;
    const { node } = instance;
    instance.tabs = node.querySelectorAll(".js-tabs-block__tab");
};

const tabRemoveClass = (tab) => {
    tab.classList.remove(TAB_ACTIVE_CLASS);
};

const tabContainerAddClass = (tabContainer) => {
    tabContainer.classList.add(TAB_CONTAINER_ACTIVE_CLASS);
};

const tabContainerRemoveClass = (tabContainer) => {
    tabContainer.classList.remove(TAB_CONTAINER_ACTIVE_CLASS);
};

const showTab = (instance, tab) => {
    const obj = instance;
    const { tabs, activeTabName, containers } = instance;
    tabs.forEach(tabRemoveClass);
    tab.classList.add(TAB_ACTIVE_CLASS);
    containers[activeTabName].forEach(tabContainerRemoveClass);
    const { name } = tab.dataset;
    containers[name].forEach(tabContainerAddClass);
    obj.activeTabName = name;
};

const initTabs = (object) => {
    const instance = object;
    const { tabs } = instance;
    instance.containers = {};
    instance.activeTabName = "";

    tabs.forEach((tab) => {
        const { name } = tab.dataset;

        if (name) {
            const selector = `.${TAB_CONTAINER}[data-name=${name}]`;
            instance.containers[name] = document.querySelectorAll(selector);
            tab.addEventListener("click", () => {
                showTab(instance, tab);
            });

            if (tab.classList.contains(TAB_ACTIVE_CLASS)) {
                instance.activeTabName = name;
            }
        }
    });
};

export default (node) => {
    const instance = { node };
    if (shouldRun(instance)) {
        findElements(instance);
        initTabs(instance);
    }
};
