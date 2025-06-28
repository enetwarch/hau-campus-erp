window.addEventListener("DOMContentLoaded", () => {
    const controller = new AbortController();
    const signal = controller.signal;

    const forgotPasswordFormElement = document.getElementById("forgot-password-form");
    forgotPasswordFormElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(forgotPasswordFormElement);
        const email = formData.get("email");

        alert(`A verification email has been sent to ${email}.`);
    }, { signal });

    window.addEventListener("beforeunload", () => controller.abort());
});
