document.addEventListener("DOMContentLoaded", function () {
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

// icon
function createIcon(iconName, size = 32, color = "currentColor") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "bi");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("fill", color);

  const useTag = document.createElementNS("http://www.w3.org/2000/svg", "use");
  useTag.setAttribute("xlink:href", `[경로]/bootstrap-icons.svg#${iconName}`);

  svg.appendChild(useTag);
  return svg;
}
