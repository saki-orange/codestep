class Main {
    #observers = [];

    constructor() {
        this.backToTopBtn = document.querySelector(".back-to-top");
        this.#init();
    }

    #init() {
        new NavMenu();
        this.backToTopBtn.addEventListener("click", (el) => {
            window.scroll({ top: 0, behavior: "smooth" });
        });
        this.#scrollInit();
    }

    destroy() {
        this.#observers.forEach((so) => so.destroy());
    }

    #scrollInit() {
        this.#observers.push(
            new ScrollObserver(".main-content", this.#backToTopAnimation.bind(this), {
                rootMargin: "0px 0px -700px 0px",
                once: false,
            })
        );
    }

    #backToTopAnimation(el, inview) {
        if (inview) {
            this.backToTopBtn.classList.add("inview");
        } else {
            this.backToTopBtn.classList.remove("inview");
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
