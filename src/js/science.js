class ScrollObserver {
    constructor(selector, threshold = 0.5) {
      this.target = document.querySelector(selector);
      this.threshold = threshold;
  
      // Ensure the target exists before proceeding
      if (!this.target) {
        console.error(`Target element with selector "${selector}" not found.`);
        return;
      }
  
      // Initialize the observer
      this.initObserver();
    }
  
    initObserver() {
      // Create an Intersection Observer instance
      this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
        threshold: this.threshold
      });
  
      // Start observing the target element
      this.observer.observe(this.target);
    }
  
    handleIntersection(entries) {
      entries.forEach(entry => {
        // If the element is in view
        if (entry.isIntersecting) {
          this.target.classList.add("bgOff");
        } else {
          this.target.classList.remove("bgOff");
        }
      });
    }
  }
  new ScrollObserver(".area-common.business._2");
  
  // Usage
//   document.addEventListener("DOMContentLoaded", () => {
//   });
  