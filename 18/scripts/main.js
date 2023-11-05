class Main {
    #observers = [];

    constructor() {
        this.header = document.querySelector(".header");
        this.side = document.querySelector(".side");
        this.mainVisualImgs = document.querySelectorAll(".main-visual__img");
        this.mq = new MediaQuery();
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
        document.addEventListener("scroll", this.#mainVisualScrollAnimation.bind(this));
        this.mq.addEvent(this.#mainVisualScrollAnimation.bind(this));
        this.#observers.push(
            new ScrollObserver(".gallery", this.#sideAnimation.bind(this), { once: false }),
            new ScrollObserver(".appear", this.#inviewAnimation),
            new ScrollObserver(".access", this.#inviewAnimation, { once: false }),
            new ScrollObserver(".main-visual", this.#navAnimation.bind(this), { once: false })
        );
    }

    #navAnimation(el, inview) {
        if (inview) {
            this.header.classList.remove("inview");
        } else {
            this.header.classList.add("inview");
        }
    }

    #sideAnimation(el, inview) {
        if (inview) {
            this.side.classList.add("inview");
        } else {
            this.side.classList.remove("inview");
        }
    }

    #inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add("inview");
        } else {
            el.classList.remove("inview");
        }
    }

    #mainVisualScrollAnimation() {
        if (this.mq.isPC()) {
            const width = 100 / 3 + 80 * (window.scrollY / window.outerHeight);
            if (width > 105) return;
            this.mainVisualImgs.forEach((img) => (img.style.width = `${width}%`));
        } else {
            const width = 100 - 80 * (window.scrollY / window.outerHeight);
            if (width < 33.33) return;
            this.mainVisualImgs.forEach((img) => (img.style.width = `${width}%`));
        }
        // const scale = 1 + 2 * (window.scrollY / window.outerHeight);
        // mainVisualContainer.style.transform = `scale(${scale})`;
    }
}
const main = new Main();
