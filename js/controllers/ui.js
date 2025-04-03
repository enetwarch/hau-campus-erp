import navFields from "../data/nav-fields.json" with { "type": "json" };
import Header from "../modules/header.js";
import Nav from "../modules/nav.js";
import Maintenance from "../modules/maintenance.js";
import Footer from "../modules/footer.js";

export default function UI(page) {
    if (!new.target) {
        throw Error(`Use the "new" keyword on the UI constructor.`);
    }

    if (typeof page !== "string") {
        throw TypeError("page argument must be a string.");
    }

    UI.initializePage(page);
}

UI.initializePage = function(page) {
    switch (page) {
        case "index": return UI.initializeIndex();
        case "forgot-password": return UI.initializeForgotPassword();
        case "dashboard": return UI.initializeDashboard();
        case "student-info": return UI.initializeStudentInfo();
        case "enrollment": return UI.initializeEnrollment();
        case "library-support": return UI.initializeLibrarySupport();
        case "management": return UI.initializeManagement();
        case "settings": return UI.initializeSettings();

        default: throw Error(`Unknown page: "${page}".`);
    }
}

UI.getElementById = function(id) {
    if (typeof id !== "string") {
        throw TypeError("id argument must be a string.");
    }

    const element = document.getElementById(id);
    if (!element) {
        throw Error(`"${id}" element id does not exist.`);
    }

    return element;
}

UI.initializeIndex = function() {
    const loginForm = UI.getElementById("loginForm");

    loginForm.addEventListener("submit", event => {
        event.preventDefault();

        window.location.href = "dashboard";
    });
}

UI.initializeForgotPassword = function() {
    const emailForm = UI.getElementById("emailForm");

    emailForm.addEventListener("submit", event => {
        event.preventDefault();

        const emailInput = UI.getElementById("emailInput").value;
        alert(`Verification email sent to ${emailInput}.`);
    });
}

UI.initializeMaintenance = function() {
    const headerContainer = UI.getElementById("headerContainer");
    const header = new Header(headerContainer);

    const navContainer = UI.getElementById("navContainer");
    const nav = new Nav(navContainer, navFields);

    const contentContainer = UI.getElementById("contentContainer");
    const content = new Maintenance(contentContainer);

    const footerContainer = UI.getElementById("footerContainer");
    const footer = new Footer(footerContainer);
}

UI.initializeDashboard = function() {
    UI.initializeMaintenance();
}

UI.initializeStudentInfo = function() {
    UI.initializeMaintenance();
}

UI.initializeEnrollment = function() {
    UI.initializeMaintenance();
}

UI.initializeLibrarySupport = function() {
    UI.initializeMaintenance();
}

UI.initializeManagement = function() {
    UI.initializeMaintenance();
}

UI.initializeSettings = function() {
    UI.initializeMaintenance();
}