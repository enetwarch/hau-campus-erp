export default function Header(container) {
    if (!new.target) {
        throw Error(`Use the "new" keyword in the Header constructor`);
    }
    this.container = container;
    const headerLeft = this.createHeaderLeft();
    const headerCenter = document.createElement("h1");
    headerCenter.classList.add("header-center");
    headerCenter.innerText = "Campus Portal";
    const headerRight = this.createHeaderRight();
    this.container.append(headerLeft, headerCenter, headerRight);
}

Header.prototype.createHeaderLeft = function() {
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

Header.prototype.createHeaderRight = function() {
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
    textContainer.append(headerText, text);
    const profile = document.createElement("img");
    profile.classList.add("profile");
    profile.src = "img/profile.jpg";
    profile.alt = "Profile";
    right.append(textContainer, profile);
    return right;
}