export default class Popup {
  constructor(popup) {
    this._popup = popup;
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

  renderLoading(isLoading) {
    if (isLoading) {
      this._popup.querySelector(".popup__button").textContent = "Сохранение...";
    } else {
      this._popup.querySelector(".popup__button").textContent = "Сохранить";
    }
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
