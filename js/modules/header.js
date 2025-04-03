export default function Header(container) {
    if (!new.target) {
        throw Error(`Use the "new" keyword in the Header constructor`);
    }

    if (!(container instanceof HTMLElement)) {
        throw TypeError("container argument must be an HTML element.");
    }

    this.container = container;

    const left = Header.createLeft();
    const center = Header.createCenter();
    const right = Header.createRight();

    this.container.append(left, center, right);
}

Header.createLeft = function() {
    const left = document.createElement("div");
    left.classList.add("header-left");

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "img/logo.png";
    logo.alt = "Logo";

    const textContainer = document.createElement("div");
    textContainer.classList.add("header-left-text-container");

    const headerText = document.createElement("h2");
    headerText.classList.add("header-left-header-text");
    headerText.innerText = "Holy Angel University";

    const text = document.createElement("p");
    text.classList.add("header-left-text");
    text.innerText = "BS in Computer Science";

    textContainer.append(headerText, text);
    left.append(logo, textContainer);

    return left;
}

Header.createCenter = function() {
    const center = document.createElement("h1");
    center.classList.add("header-center");
    center.innerText = "Campus Portal";

    return center;
}

Header.createRight = function() {
    const right = document.createElement("div");
    right.classList.add("header-right");

    const textContainer = document.createElement("div");
    textContainer.classList.add("header-right-text-container");

    const headerText = document.createElement("h2");
    headerText.classList.add("header-right-header-text");
    headerText.innerText = "John Doe";

    const text = document.createElement("p");
    text.classList.add("header-right-text");
    text.innerText = "First Year College Student";

    const profile = document.createElement("img");
    profile.classList.add("profile");
    profile.src = "img/profile.jpg";
    profile.alt = "Profile";

    textContainer.append(headerText, text);
    right.append(textContainer, profile);
    
    return right;
}