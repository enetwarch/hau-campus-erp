import Warning from "./modules/warning.js";
import UI from "./controllers/ui.js";

window.addEventListener("load", () => {
    const media = window.matchMedia("(min-width: 1537px)");
    const iconClass = "fa-desktop";
    const message = "Please view on desktop";

    const warning = new Warning(media, iconClass, message);

    const page = document.body.dataset.page;
    const ui = new UI(page);
});