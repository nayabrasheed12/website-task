// Neki Website - JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile navigation menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      });
    });
  }

  // 2. Search and filter causes
  const causeSearch = document.getElementById("causeSearch");
  const causeCards = document.querySelectorAll(".cause-card");
  const noResults = document.getElementById("noResults");

  if (causeSearch && causeCards.length > 0) {
    causeSearch.addEventListener("input", function () {
      const searchText = causeSearch.value.trim().toLowerCase();
      let visibleCards = 0;

      causeCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const matches = cardText.includes(searchText);

        card.hidden = !matches;

        if (matches) {
          visibleCards++;
        }
      });

      if (noResults) {
        noResults.hidden = visibleCards !== 0;
      }
    });
  }

  // 3. Donation / volunteer inquiry demo form
  const donateForm = document.getElementById("donateForm");
  const formMessage = document.getElementById("formMessage");

  if (donateForm && formMessage) {
    donateForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!donateForm.checkValidity()) {
        donateForm.reportValidity();
        return;
      }

      const fullName = document.getElementById("fullName").value.trim();
      const helpType = document.getElementById("helpType").value;

      formMessage.textContent =
        "Thank you, " + fullName +
        "! Your interest in " + helpType.toLowerCase() +
        " has been recorded in this demo.";

      donateForm.reset();
      formMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  }

  // 4. Friendly message in the browser console
  console.log("Welcome to Neki — One Click Can Change a Life!");
});

 // Request Help form
 const requestHelpForm = document.getElementById("requestHelpForm");
 const requestHelpMessage = document.getElementById("requestHelpMessage");

 if (requestHelpForm && requestHelpMessage) {
   requestHelpForm.addEventListener("submit", function (event) {
     event.preventDefault();

     if (!requestHelpForm.checkValidity()) {
       requestHelpForm.reportValidity();
       return;
     }

     const name = document.getElementById("requestName").value.trim();
     const category = document.getElementById("requestType").value;

     requestHelpMessage.textContent =
       "Thank you, " + name +
       ". Your " + category.toLowerCase() +
       " request has been recorded in this demo.";

     requestHelpForm.reset();
   });
 }
