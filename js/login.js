window.addEventListener("load", () => {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", event => {
        event.preventDefault();
        window.location.href = "dashboard.html";
    });
});