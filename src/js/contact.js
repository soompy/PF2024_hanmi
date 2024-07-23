class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 82;
    let self = this;

    document.querySelectorAll(".tab-item .item").forEach((item) => {
      item.addEventListener("click", function (event) {
        self.onTabClick(event, this);
      });
    });
    window.addEventListener("scroll", () => {
      this.onScroll();
    });
    window.addEventListener("resize", () => {
      this.onResize();
    });

    document.addEventListener("DOMContentLoaded", () => {
      this.initializeTabSlider();
    });
  }

  initializeTabSlider() {
    requestAnimationFrame(() => {
      let firstTab = document.querySelector(".tab-item .item");
      if (firstTab) {
        this.currentTab = firstTab;
        this.currentId = firstTab.getAttribute("href");
        this.setSliderCss();
      }
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let href = element.getAttribute("href");

    let scrollTop =
      document.querySelector(href).offsetTop - this.tabContainerHeight + 1;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let offset =
      document.querySelector(".tabs-container").offsetTop +
      document.querySelector(".tabs-container").offsetHeight -
      this.tabContainerHeight;
    if (window.scrollY > offset) {
      document.querySelector(".tab-item").classList.add("tab-item--top");
    } else {
      document.querySelector(".tab-item").classList.remove("tab-item--top");
    }
  }

  findCurrentTabSelector() {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    document.querySelectorAll(".tab-item .item").forEach((item) => {
      let id = item.getAttribute("href");
      let offsetTop =
        document.querySelector(id).offsetTop - self.tabContainerHeight;
      let offsetBottom =
        document.querySelector(id).offsetTop +
        document.querySelector(id).offsetHeight -
        self.tabContainerHeight;
      if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = item;
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    requestAnimationFrame(() => {
      let width = 0;
      let left = 0;
      let tabItemRect = document
        .querySelector(".tab-item")
        .getBoundingClientRect();
      if (this.currentTab) {
        let currentTabRect = this.currentTab.getBoundingClientRect();
        width = currentTabRect.width + "px";
        left = Math.max(currentTabRect.left - tabItemRect.left, 0) + "px";
      }
      let tabSlider = document.querySelector(".tab-slider");
      tabSlider.style.width = width;
      tabSlider.style.left = left;
    });
  }
}

new StickyNavigation();
