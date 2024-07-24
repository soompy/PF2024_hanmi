class Leaf {
  constructor(container) {
    this.container = container;
    this.element = document.createElement('span');
    this.element.classList.add('leaf');
    this.positionLeaf();
    this.container.appendChild(this.element);
  }

  getRandomPosition() {
    const containerRect = this.container.getBoundingClientRect();
    const x = Math.random() * (containerRect.width - 20);
    const y = Math.random() * (containerRect.height - 20);
    return { x, y };
  }

  positionLeaf() {
    const { x, y } = this.getRandomPosition();
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.leaves-container');
  for (let i = 0; i < 10; i++) {
    new Leaf(container);
  }
});
