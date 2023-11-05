class NavMenu {
  constructor() {
    this.DOM = {};
    this.DOM.toggleBtn = document.querySelector(".header__hamburger");
    this.DOM.header = document.querySelector(".header");

    this.DOM.link = {
      top: document.querySelector("#topLink"),
      information: document.querySelector("#informationLink"),
      gallery: document.querySelector("#galleryLink"),
      access: document.querySelector("#accessLink"),
      contact: document.querySelector("#contactLink"),
    };
    this.DOM.section = {
      information: document.querySelector(".information"),
      gallery: document.querySelector(".gallery"),
      access: document.querySelector(".access"),
      contact: document.querySelector(".contact"),
    };

    this.eventType = this._getEventType();
    this._addMenuToggleEvent();
    this._addScrollEvent();
  }

  _getEventType() {
    return "click";
  }

  _toggle() {
    this.DOM.header.classList.toggle("menu-open");
  }

  _addMenuToggleEvent() {
    this.DOM.toggleBtn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.link.top.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.link.information.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.link.gallery.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.link.access.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.link.contact.addEventListener(this.eventType, this._toggle.bind(this));
  }

  _addScrollEvent() {
    this.DOM.link.top.addEventListener(this.eventType, () =>
      scrollTo({ top: 0, behavior: "smooth" })
    );
    this.DOM.link.information.addEventListener(this.eventType, () =>
      scrollTo({
        top: this._calcElementPosition(this.DOM.section.information, -100),
        behavior: "smooth",
      })
    );
    this.DOM.link.gallery.addEventListener(this.eventType, () =>
      scrollTo({
        top: this._calcElementPosition(this.DOM.section.gallery, -100),
        behavior: "smooth",
      })
    );
    this.DOM.link.access.addEventListener(this.eventType, () =>
      scrollTo({
        top: this._calcElementPosition(this.DOM.section.access, -100),
        behavior: "smooth",
      })
    );
    this.DOM.link.contact.addEventListener(this.eventType, () =>
      scrollTo({
        top: this._calcElementPosition(this.DOM.section.contact, -100),
        behavior: "smooth",
      })
    );
  }

  _calcElementPosition(el, offset = 0) {
    return el.getBoundingClientRect().top + scrollY + offset;
  }
}
