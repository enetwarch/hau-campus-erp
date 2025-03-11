window.addEventListener("load", () => {
    const emailForm = document.getElementById("emailForm");
    emailForm.addEventListener("submit", event => {
        event.preventDefault();
        const emailInput = document.getElementById("emailInput").value;
        alert(`Verification email sent to ${emailInput}`);
    });
});