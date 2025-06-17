const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "/hau-campus-erp/dashboard";
});
