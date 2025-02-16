document.getElementById("emailVerificationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    alert(`Verification email sent to ${email}.`);
});