export default function Nav(container, fields) {
    if (!new.target) {
        throw Error(`Use the "new" keyword in the Nav constructor.`);
    }

    if (!(container instanceof HTMLElement)) {
        throw TypeError("container argument must be a HTML element.");
    } else if (!Array.isArray(fields)) {
        throw TypeError("fields argument must be an array.");
    } else if (!fields.every(field => typeof field === "object")) {
        throw TypeError("field argument must have objects as elements.");
    }

    this.container = container;
    this.fields = fields;
    this.page = document.body.dataset.page;

    this.fields.forEach(field => {
        const fieldElement = this.createField(field);
        this.container.appendChild(fieldElement);
    });
}

Nav.validateFieldArgument = function(field) {
    if (!("href" in field)) {
        throw TypeError(`field argument must have a "href" key.`);
    } else if (!("iconClass" in field)) {
        throw TypeError(`field argument must have an "iconClass" key.`);
    } else if (!("text" in field)) {
        throw TypeError(`field argument must have a "text" key.`);
    } else if (typeof field.href !== "string") {
        throw TypeError(`"href" key must be a string.`);
    } else if (typeof field.iconClass !== "string") {
        throw TypeError(`"iconClass" key must be a string.`);
    } else if (typeof field.text !== "string") {
        throw TypeError(`"text" key must be a string.`);
    }
}

Nav.prototype.createField = function(field) {
    Nav.validateFieldArgument(field);
    const { href, iconClass, text } = field;

    const fieldElement = document.createElement("a");
    fieldElement.classList.add("nav-field");
    fieldElement.href = href;
    if (this.page === href) {
        fieldElement.id = "currentPage";
    }

    const iconElement = document.createElement("i");
    iconElement.classList.add("nav-icon", "fa-solid", iconClass);

    const textElement = document.createElement("p");
    textElement.classList.add("nav-text");
    textElement.innerText = text;

    fieldElement.append(iconElement, textElement);
    
    return fieldElement;
}