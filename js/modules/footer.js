export default function Footer(container) {
    if (!new.target) {
        throw Error (`Use the "new" keyword on the Footer constructor`);
    }

    if (!(container instanceof HTMLElement)) {
        throw TypeError("container argument must be an HTML element.");
    }

    this.container = container;

    const text = Footer.createText();
    this.container.appendChild(text);
}

Footer.createText = function() {
    const textElement = document.createElement("p");
    textElement.classList.add("footer-text");

    const textSentences = [
        "All rights reserved, © 2020 DATAMOBILITY Corporation Philippines.",
        "Unit 1103, 11th Floor, Galleria Corporate Center, EDSA cor.",
        "Ortigas Ave. Ugong Norte Quezon City Telephone: (02) 914-2960"
    ];

    textElement.innerText = textSentences.join(" ");
    
    return textElement;
}