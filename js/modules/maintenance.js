export default function Maintenance(container) {
    if (!new.target) {
        throw Errorr(`Use the "new" keyword in the Maintenace constructor.`);
    }
    this.container = container;
    const containerElement = document.createElement("div");
    containerElement.classList.add("maintenance-container");
    const iconElement = document.createElement("i");
    iconElement.classList.add("maintenance-icon", "fa-solid", "fa-screwdriver-wrench");
    const textElement = document.createElement("h1");
    textElement.classList.add("maintenance-text");
    textElement.innerText = "UNDER MAINTENANCE";
    containerElement.append(iconElement, textElement);
    this.container.appendChild(containerElement);
}