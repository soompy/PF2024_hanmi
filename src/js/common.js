import Navigo from "navigo";

document.addEventListener("DOMContentLoaded", function () {
  // theme
  const darkModeToggle = document.getElementById("darkModeToggle");
  const themeText = document.querySelector(".theme-text");

  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      themeText.textContent = "Dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeText.textContent = "Light";
    }
  });

  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    darkModeToggle.checked = true;
    themeText.textContent = "Dark";
  } else {
    darkModeToggle.checked = false;
    themeText.textContent = "Light";
  }

  // navigo
  const router = new Navigo("/");

  const pageScripts = {
    "/": "./src/js/home.js",
    "/about": "./src/js/about.js",
    "/business": "./src/js/business.js",
    "/contact": "./src/js/contact.js",
  };

  router
    .on({
      "/": function () {
        renderPage("home.html");
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
        loadPageScript(page);
      })
      .catch((error) => console.error("Error fetching page:", error));
  }

  function loadPageScript(page) {
    const routePath = `/${page.split(".")[0]}`;
    const existingScript = document.querySelector(
      `script[data-page="${routePath}"]`
    );
    if (existingScript) {
      existingScript.remove();
    }

    const scriptFile = pageScripts[routePath];
    if (scriptFile) {
      const script = document.createElement("script");
      script.src = scriptFile;
      script.dataset.page = routePath;
      script.onload = () => console.log(`Script ${scriptFile} loaded.`);
      script.onerror = (e) =>
        console.error(`Error loading script ${scriptFile}:`, e);
      document.head.appendChild(script);
    }
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

  // mobile gnb
  var moMenu = document.querySelector(".mo-menu");
  const moNav = document.querySelector(".mo-nav");
  const btnClose = document.querySelector(".btn-close");
  const moItems = document.querySelectorAll(".mo-item");
  const fixedBox = document.querySelector(".fixed-box");

  moMenu.addEventListener("click", () => {
    moNav.classList.add("active");
    fixedBox.style.display = "none";
  });
  btnClose.addEventListener("click", () => {
    moNav.classList.remove("active");
    fixedBox.style.display = "block";
  });
  moItems.forEach(function (moMenuItem) {
    moMenuItem.addEventListener("click", () => {
      moItems.forEach(function (item) {
        item.classList.remove("on");
      });
      moMenuItem.classList.add("on");
    });
  });

  // footer
  const slidedownBtn = document.querySelector(".slidedownBtn");
  const slidedownCont = document.querySelector(".slidedownCont");
  slidedownBtn.addEventListener("click", () => {
    slidedownBtn.classList.toggle("on");
    slidedownCont.classList.toggle("on");
  });
});

const btnTop = document.querySelector(".btnTop");

if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
