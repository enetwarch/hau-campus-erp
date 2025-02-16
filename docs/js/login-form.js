document.getElementById("loginForm").addEventListener("submit", handleLogin);

function handleLogin(event) {
    event.preventDefault();
    window.location.href = "dashboard.html";
}

document.getElementById("rememberMeText").addEventListener("click", toggleRememberMeCheckbox);

function toggleRememberMeCheckbox() {
    var checkbox = document.getElementById("rememberMeCheckbox");
    checkbox.checked = !checkbox.checked;
}