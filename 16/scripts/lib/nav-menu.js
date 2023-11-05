class NavMenu {
    constructor() {
        this.DOM = {};
        this.DOM.hamburger = document.querySelector(".header__hamburger");
        this.DOM.cover = document.querySelector(".header__cover");
        this.DOM.header = document.querySelector(".header");
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
    }
}
