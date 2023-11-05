class MediaQuery {
    constructor() {
        this.pcFlg = false;
        this.minWidth = "960px";
        this.mql = window.matchMedia(`(min-width: ${this.minWidth})`);
        this.#init();
    }

    #init() {
        this.mql.addEventListener("change", this.#mqFn.bind(this));
        this.#mqFn(this.mql);
    }
    #mqFn(mm) {
        if (mm.matches) {
            // pc
            this.pcFlg = true;
        } else {
            // mobile
            this.pcFlg = false;
        }
    }

    isPC() {
        return this.pcFlg;
    }

    addEvent(fn) {
        this.mql.addEventListener("change", fn);
    }

}
