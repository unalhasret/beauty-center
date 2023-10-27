let navbar = document.querySelector(".navbar");
let hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", () => {
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  }
  else {
    navbar.className = "navbar";
  }
});
