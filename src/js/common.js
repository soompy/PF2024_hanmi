import Navigo from "navigo";

document.addEventListener("DOMContentLoaded", function () {
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
  const router = new Navigo("/");

  router
    .on({
      "/": function () {
        renderPage("main.html");
      },
      "/about": function () {
        renderPage("about.html");
      },
      "/science": function () {
        renderPage("science.html");
      },
      "/business": function () {
        renderPage("business.html");
      },
      "/contact": function () {
        renderPage("contact.html");
      },
    })
    .resolve();

  function renderPage(page) {
    fetch(`${page}`)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("content").innerHTML = html;
      })
      .catch((error) => console.error("Error fetching page:", error));
  }

  // gnb
  var menuItems = document.querySelectorAll(".gnb > li");

  menuItems.forEach(function (menuItem) {
    var anchor = menuItem.querySelector("a");
    var subMenu = menuItem.querySelector(".gnb.sub-menu");

    anchor.addEventListener("mouseover", function () {
      var allSubMenus = document.querySelectorAll(".gnb.sub-menu");
      allSubMenus.forEach(function (menu) {
        menu.classList.remove("on");
      });

      if (subMenu) {
        subMenu.classList.add("on");
      }
    });

    if (subMenu) {
      subMenu.addEventListener("mouseover", function () {
        var allSubMenus = document.querySelectorAll(".gnb.sub-menu");
        allSubMenus.forEach(function (menu) {
          if (menu !== subMenu) {
            menu.classList.remove("on");
          }
        });

        subMenu.classList.add("on");
      });

      subMenu.addEventListener("mouseleave", function () {
        subMenu.classList.remove("on");
      });
    }
  });

  // footer
  const slidedownBtn = document.querySelector(".slidedownBtn");
  const slidedownCont = document.querySelector(".slidedownCont");
  slidedownBtn.addEventListener("click", () => {
    slidedownBtn.classList.toggle("on");
    slidedownCont.classList.toggle("on");
  });  
});

