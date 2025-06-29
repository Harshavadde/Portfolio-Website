document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const menu = document.getElementById("menu");
  const openIcon = document.querySelector(".openicon");
  const closeIcon = document.querySelector(".closeicon");

  openIcon.addEventListener("click", function (e) {
    e.preventDefault();
    menu.style.display = "block";
  });

  closeIcon.addEventListener("click", function (e) {
    e.preventDefault();
    menu.style.display = "none";
  });

  // --- "Show Now" Button Action ---
  const shopButtons = document.querySelectorAll(".pro a");
  shopButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Thank you for your interest! Cart functionality coming soon.");
    });
  });

  // --- Image Fallback Handler ---
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.onerror = function () {
      this.src = "https://via.placeholder.com/300x300?text=Image+Unavailable";
    };
  });
});
