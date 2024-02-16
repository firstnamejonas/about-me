document.addEventListener("DOMContentLoaded", function() {
    const navCheck = document.getElementById("nav-check");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        // Überprüfe, ob das Menü geöffnet ist, und schließe es bei Bedarf
        if (navCheck.checked) {
          navCheck.checked = false;
        }
      });
    });
  });