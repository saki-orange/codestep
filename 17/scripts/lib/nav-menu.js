class NavMenu {
    constructor() {
        this.DOM = {};
        this.DOM.hamburger = document.querySelector(".header__hamburger");
        this.DOM.cover = document.querySelector(".header__cover");
        this.DOM.header = document.querySelector(".header");

        this.DOM.pickUpLink = document.querySelector("#pickUpLink");
        this.DOM.featureLink = document.querySelector("#featureLink");
        this.DOM.contactLink = document.querySelector("#contactLink");

        this.DOM.pickUpSection = document.querySelector(".pickup");
        this.DOM.featureSection = document.querySelector(".feature");
        this.DOM.contactSection = document.querySelector(".contact");

        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        const isTouchCapable =
            "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);

        return isTouchCapable ? "touchstart" : "click";
    }

    _toggle() {
        this.DOM.header.classList.toggle("menu-open");
    }

    _addEvent() {
        this.DOM.hamburger.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.pickUpLink.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.featureLink.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.contactLink.addEventListener(this.eventType, this._toggle.bind(this));

        this.DOM.pickUpLink.addEventListener(this.eventType, () => {
            scrollTo({ top: this._calcElementPosition(this.DOM.pickUpSection), behavior: "smooth" });
        });
        this.DOM.featureLink.addEventListener(this.eventType, () => {
            scrollTo({ top: this._calcElementPosition(this.DOM.featureSection, -60), behavior: "smooth" });
        });
        this.DOM.contactLink.addEventListener(this.eventType, () => {
            scrollTo({ top: this._calcElementPosition(this.DOM.contactSection, -60), behavior: "smooth" });
        });
    }

    _calcElementPosition(el, offset = 0) {
        return el.getBoundingClientRect().top + scrollY + offset;
    }
}
