class NavMenu {
  constructor() {
    this.DOM = {};
    this.DOM.toggleBtns = document.querySelectorAll(".navMenuToggle");
    this.DOM.header = document.querySelector("#header");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.header.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.toggleBtns.forEach((btn) =>
      btn.addEventListener(this.eventType, this._toggle.bind(this))
    );
  }
}
