// Set footer year
(function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();

// Athlete Portal simple code gate
(function () {
  const form = document.getElementById("athlete-portal-form");
  const input = document.getElementById("access-code");
  const error = document.getElementById("portal-error");
  const lockSection = document.getElementById("athlete-portal-lock");
  const contentSection = document.getElementById("athlete-portal-content");

  // Change this to whatever code you want to use
  const ACCESS_CODE = "kautz2025";

  if (!form || !input || !lockSection || !contentSection) {
    return; // Not on the Athlete Portal page
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = input.value.trim();

    if (value === ACCESS_CODE) {
      // Hide lock, show content
      lockSection.classList.add("hidden");
      contentSection.classList.remove("hidden");
      error.classList.add("hidden");
      input.value = "";
    } else {
      error.classList.remove("hidden");
    }
  });
})();
