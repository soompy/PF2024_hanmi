document.addEventListener("DOMContentLoaded", function () {
  const tabItems = document.querySelectorAll(".tab ul li");
  const tabContents = document.querySelectorAll(".about-cont");

  tabItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      tabItems.forEach((tab) => tab.classList.remove("on"));
      tabContents.forEach((content) => content.classList.remove("on"));

      item.classList.add("on");
      tabContents[index].classList.add("on");
    });
  });
});