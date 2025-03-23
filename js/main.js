import Header from "./modules/header.js";
import Nav from "./modules/nav.js";
import Maintenance from "./modules/maintenance.js";
import Footer from "./modules/footer.js";

const desktop = window.matchMedia("(min-width: 1537px)");
desktop.addEventListener("change", event => handleWarning(event));
desktop.addEventListener("load", () => handleWarning(desktop));

function handleWarning(event) {
    if (event.matches) {
        const warning = document.querySelector(".warning");
        if (warning) warning.remove();
    } else {
        const warning = document.createElement("div");
        warning.classList.add("warning");
        const warningContainer = document.createElement("div");
        warningContainer.classList.add("warning-container");
        const warningIcon = document.createElement("i");
        warningIcon.classList.add("warning-icon", "fa-solid", "fa-desktop");
        const warningText = document.createElement("h1");
        warningText.classList.add("warning-text");
        warningText.innerText = "Please view on desktop";
        warningContainer.append(warningIcon, warningText);
        warning.appendChild(warningContainer);
        document.body.appendChild(warning);
    }
}

let path = window.location.pathname;
path = path.split("/").slice(-1)[0];
path = path.replace(".html", "");
if (path === "" || path === "hau-campus-erp") {
    path = "login";
}

switch (path) {
    case "login": {
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", event => {
            event.preventDefault();
            window.location.href = "dashboard";
        });
        break;
    }
    case "forgot-password": {
        const emailForm = document.getElementById("emailForm");
        emailForm.addEventListener("submit", event => {
            event.preventDefault();
            const emailInput = document.getElementById("emailInput").value;
            alert(`Verification email sent to ${emailInput}.`);
        });
        break;
    }
    case "dashboard":
    case "student-info":
    case "enrollment":
    case "library-support":
    case "management":
    case "settings": {
        const headerContainer = document.getElementById("headerContainer");
        const navContainer = document.getElementById("navContainer");
        const contentContainer = document.getElementById("contentContainer");
        const footerContainer = document.getElementById("footerContainer");
        const header = new Header(headerContainer);
        const nav = new Nav(navContainer, path);
        const content = new Maintenance(contentContainer);
        const footer = new Footer(footerContainer);
        break;
    }
}