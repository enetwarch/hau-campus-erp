window.addEventListener("DOMContentLoaded", () => {
  const timeoutId = setTimeout(() => {
    const redirectionLink = document.createElement("a");
    redirectionLink.href = "./";

    redirectionLink.click();
  }, 3000);

  window.addEventListener("beforeunload", () => clearTimeout(timeoutId));
});
