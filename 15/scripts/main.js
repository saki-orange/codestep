class Main {
  #observers = [];

  constructor() {
    this.#init();
  }

  #init() {
    new NavMenu();
    this.#scrollInit();
  }

  destroy() {
    this.#observers.forEach((so) => so.destroy());
  }

  #scrollInit() {
    this.#observers.push(
      new ScrollObserver(".slide-animation", this.#inviewAnimation),
      new ScrollObserver(".slide-animation-reverse", this.#inviewAnimation),
      new ScrollObserver(".scale-animation", this.#inviewAnimation)
    );
  }

  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  #inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }
}
const main = new Main();
