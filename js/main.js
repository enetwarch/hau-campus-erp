import UI from "./controllers/ui.js";

window.addEventListener("load", () => {
    const page = document.body.dataset.page;
    const ui = new UI(page);
});
