window.addEventListener("load", () => {
    modifyLoginListeners(true);
});

function loadLoginPage() {
    modifyForgotPasswordListeners(false);
    const headerText = document.querySelector(".header-text");
    if (headerText) {
        headerText.innerText = "User Login";
    }
    const form = document.querySelector(".form");
    if (form) {
        form.id = "login";
    }
    const emailIcon = document.querySelector(".fa-envelope");
    if (emailIcon) {
        emailIcon.classList.remove("fa-envelope");
        emailIcon.classList.add("fa-lock");
    }
    const currentActionField = document.querySelector(".action-field");
    if (currentActionField) {
        currentActionField.remove();
    }
    const emailInput = document.querySelector(`input[type="email"]`);
    if (emailInput) {
        emailInput.type = "password";
        emailInput.placeholder = "Password";
        emailInput.minlength = 8;
        emailInput.value = "";
    }
    const newActionField = document.createElement("div");
    newActionField.classList.add("action-field");
    const leftActionField = document.createElement("div");
    leftActionField.classList.add("left");
    const rememberCheckbox = document.createElement("input");
    rememberCheckbox.id = "remember";
    rememberCheckbox.classList.add("checkbox");
    rememberCheckbox.type = "checkbox";
    const rememberLabel = document.createElement("label");
    rememberLabel.htmlFor = "remember";
    rememberLabel.innerText = "Remember Me";
    leftActionField.append(rememberCheckbox, rememberLabel);
    const rightActionField = document.createElement("div");
    rightActionField.id = "forgot";
    rightActionField.classList.add("right");
    rightActionField.innerText = "Forgot Password?";
    newActionField.append(leftActionField, rightActionField);
    const button = document.querySelector(".button");
    if (button) {
        button.value = "Log In";
        button.before(newActionField);
    }
    modifyLoginListeners(true);
}

function loadForgotPasswordPage() {
    modifyLoginListeners(false);
    const headerText = document.querySelector(".header-text");
    if (headerText) {
        headerText.innerText = "Forgot Password";
    } 
    const form = document.querySelector(".form");
    if (form) {
        form.id = "email";
    }
    const passwordIcon = document.querySelector(".fa-lock");
    if (passwordIcon) {
        passwordIcon.classList.remove("fa-lock");
        passwordIcon.classList.add("fa-envelope");    
    }
    const passwordInput = document.querySelector(`input[type="password"]`);
    if (passwordInput) {
        passwordInput.type = "email";
        passwordInput.placeholder = "Email";
        passwordInput.minlength = 0;
        passwordInput.value = "";    
    }
    const currentActionField = document.querySelector(".action-field");
    if (currentActionField) {
        currentActionField.remove();
    }
    const newActionField = document.createElement("div");
    newActionField.id = "back";
    newActionField.classList.add("action-field");
    newActionField.innerText = "Back to Log In";
    newActionField.style.cursor = "pointer";
    const button = document.querySelector(".button");
    if (button) {
        button.value = "Send Verification";
        button.after(newActionField);
    }
    modifyForgotPasswordListeners(true);
}

function modifyLoginListeners(add) {
    const login = document.getElementById("login");
    const forgot = document.getElementById("forgot");
    if (add) {
        login.addEventListener("submit", pressLogIn);
        forgot.addEventListener("click", loadForgotPasswordPage);    
    } else {
        login.removeEventListener("submit", pressLogIn);
        forgot.removeEventListener("click", loadForgotPasswordPage);    
    }
}

function modifyForgotPasswordListeners(add) {
    const email = document.getElementById("email");
    const back = document.getElementById("back");
    if (add) {
        email.addEventListener("submit", pressVerifyEmail);
        back.addEventListener("click", loadLoginPage);
    } else {
        email.removeEventListener("submit", pressVerifyEmail);
        back.removeEventListener("click", loadLoginPage);    
    }
}

function pressLogIn(event) {
    event.preventDefault();
    window.location.href = "dashboard.html";
}

function pressVerifyEmail(event) {
    event.preventDefault();
    const emailInputField = document.querySelector(`input[type="email"]`);
    const emailAddress = emailInputField.value;
    alert(`Verification email sent to ${emailAddress}.`);
}