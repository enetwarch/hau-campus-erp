document.getElementById("email").addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Verification email sent to ${email}.`);
});