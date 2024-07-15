document.addEventListener("DOMContentLoaded", function () {
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
  });
  