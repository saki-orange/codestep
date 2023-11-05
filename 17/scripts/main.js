class Main {
    #observers = [];

    constructor() {
        this.#init();
    }

    #init() {
        new NavMenu();
        new Swiper(".swiper", {
            slidesPerView: "auto",
            spaceBetween: 35,
            loop: true,
            centeredSlides: true,
        });
        this.#scrollInit();
    }

    destroy() {
        this.#observers.forEach((so) => so.destroy());
    }

    #scrollInit() {
        this.#observers.push(
            new ScrollObserver(".feature__img", this.#inviewAnimation, {
                rootMargin: "-100px",
            })
        );
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
