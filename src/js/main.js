import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "../styles/main.scss";

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
