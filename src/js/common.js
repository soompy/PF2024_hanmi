document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".gnb > li > a");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("mouseover", function () {
      var parentLi = menuItem.parentNode;
      var subMenu = parentLi.querySelector(".gnb.sub");

      if (subMenu) {
        subMenu.classList.add("on");
      }
    });
  });

  var gnb = document.querySelector(".gnb");
  gnb.addEventListener("mouseleave", function () {
    var subMenus = gnb.querySelectorAll(".gnb.sub");
    subMenus.forEach(function (subMenu) {
      subMenu.classList.remove("on");
    });
  });

  var subMenus = document.querySelectorAll(".gnb.sub");
  subMenus.forEach(function (subMenu) {
    subMenu.addEventListener("mouseover", function () {
      subMenu.classList.add("on");
    });
  });

  subMenus.forEach(function (subMenu) {
    subMenu.addEventListener("mouseleave", function () {
      subMenu.classList.remove("on");
    });
  });
});
