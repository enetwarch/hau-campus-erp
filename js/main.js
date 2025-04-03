import Warning from "./modules/warning.js";
import Header from "./modules/header.js";
import Nav from "./modules/nav.js";
import Maintenance from "./modules/maintenance.js";
import Footer from "./modules/footer.js";

window.addEventListener("load", () => {
    const media = window.matchMedia("(min-width: 1537px)");
    const iconClass = "fa-desktop";
    const message = "Please view on desktop";

    const warning = new Warning(media, iconClass, message);
});

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