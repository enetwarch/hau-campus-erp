import Header from "./modules/header.js";
import Nav from "./modules/nav.js";

let path = window.location.pathname;
path = path.split("/").slice(-1)[0];
path = path.replace(".html", "");
if (path === "" || path === "hau-campus-erp") {
    path = "login";
}

switch (path) {
    case "dashboard": {
        const headerContainer = document.getElementById("headerContainer");
        const navContainer = document.getElementById("navContainer");
        const header = new Header(headerContainer);
        const nav = new Nav(navContainer, path);
    }
}