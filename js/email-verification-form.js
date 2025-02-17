document.getElementById("emailVerificationForm").addEventListener("submit", handleEmailVerification);

function handleEmailVerification(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    alert(`Verification email sent to ${email}.`);
}