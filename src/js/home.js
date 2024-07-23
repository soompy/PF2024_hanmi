class Slider {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.init();
    });
  }

  init() {
    this.swiper = document.querySelector(".main2Swiper");
    if (!this.swiper) {
      console.error('Element with class ".main2Swiper" not found');
      return;
    }

    this.swiperWrapper = this.swiper.querySelector(".swiper-wrapper");
    if (!this.swiperWrapper) {
      console.error('Element with class ".swiper-wrapper" not found');
      return;
    }

    this.slides = this.swiper.querySelectorAll(".swiper-slide");
    if (this.slides.length === 0) {
      console.error('No elements with class ".swiper-slide" found');
      return;
    }

    this.prevButton = document.querySelector(".swiper-btn.prev");
    if (!this.prevButton) {
      console.error('Element with class ".swiper-btn.prev" not found');
      return;
    }

    this.nextButton = document.querySelector(".swiper-btn.next");
    if (!this.nextButton) {
      console.error('Element with class ".swiper-btn.next" not found');
      return;
    }

    this.currentIndex = 0;
    this.updateSlidePosition();

    this.prevButton.addEventListener("click", () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateSlidePosition();
      }
    });

    this.nextButton.addEventListener("click", () => {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
        this.updateSlidePosition();
      }
    });
  }

  updateSlidePosition() {
    const slideWidth = this.slides[0].offsetWidth;
    this.swiperWrapper.style.transform = `translateX(-${
      this.currentIndex * slideWidth
    }px)`;
  }
}

new Slider();
