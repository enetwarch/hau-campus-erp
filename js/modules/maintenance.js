export default function Maintenance(container) {
    if (!new.target) {
        throw Error(`Use the "new" keyword in the Maintenance constructor.`);
    }

    if (!(container instanceof HTMLElement)) {
        throw TypeError("container argument must be an HTML element.");
    }

    this.container = container;

    const maintenance = Maintenance.create();
    this.container.appendChild(maintenance);
}

Maintenance.create = function() {
    const containerElement = document.createElement("div");
    containerElement.classList.add("maintenance-container");

    const iconElement = document.createElement("i");
    iconElement.classList.add("maintenance-icon", "fa-solid", "fa-screwdriver-wrench");

    const textElement = document.createElement("h1");
    textElement.classList.add("maintenance-text");
    textElement.innerText = "UNDER MAINTENANCE";

    containerElement.append(iconElement, textElement);
    
    return containerElement;
}