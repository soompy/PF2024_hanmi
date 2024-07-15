import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import Navigo from 'navigo';
import "../styles/main.scss";

import "./common"

// theme
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

// navigo
const router = new Navigo('/');

router.on({
  '/': function () {
    renderPage("main.html");
  },
  '/about': function () {
    renderPage("about.html");
  },
  '/science': function () {
    renderPage("science.html");
  },
  '/business': function () {
    renderPage("business.html");
  },
  '/contact': function () {
    renderPage("contact.html");
  }
}).resolve();

function renderPage(page) {
  fetch(`${page}`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => console.error("Error fetching page:", error));
}