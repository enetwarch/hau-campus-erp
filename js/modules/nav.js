export default function Nav(container, path) {
    if (!new.target) {
        throw Error(`Use the "new" keyword in the Nav constructor.`);
    }
    this.container = container;
    this.path = path;
    const fields = [
        ["dashboard", "fa-table-columns", "Dashboard"],
        ["student-info", "fa-user", "Student Info"],
        ["enrollment", "fa-right-to-bracket", "Enrollment"],
        ["library-support", "fa-book", "Library Support"],
        ["management", "fa-bars-progress", "Management"],
        ["settings", "fa-gear", "Settings"]
    ];
    fields.forEach(field => this.createField(field));
}

Nav.prototype.createField = function(field) {
    const href = field[0];
    const icon = field[1];
    const text = field[2];
    const fieldElement = document.createElement("a");
    if (this.path === href) fieldElement.id = "currentPage";
    fieldElement.classList.add("nav-field");
    fieldElement.href = href;
    const iconElement = document.createElement("i");
    iconElement.classList.add("nav-icon", "fa-solid", icon);
    const textElement = document.createElement("p");
    textElement.classList.add("nav-text");
    textElement.innerText = text;
    fieldElement.append(iconElement, textElement);
    this.container.appendChild(fieldElement);
}