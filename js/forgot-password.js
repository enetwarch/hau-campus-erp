const form = document.getElementById("forgot-password-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("email");

  alert(`Verification email has been sent to ${email}. Please check your inbox.`);
});
