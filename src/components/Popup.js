export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._buttonPopupSubmit = this._popup.querySelector(".popup__button");
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  renderLoading(buttonText) {
    this._buttonPopupSubmit.textContent = buttonText;
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__button-close")
      ) {
        this.close();
      }
    });
  }
}
