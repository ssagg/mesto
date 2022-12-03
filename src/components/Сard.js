export default class Card {
  constructor(name, link, templateSelector, { handleImageClick }) {
    this._name = name;
    this._link = link;
    // this._id = id;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  _handleButtonLikeClick() {
    this._likeButton.classList.toggle("card__icon_active");
  }

  _handleButtonDelClick() {
    this._element.remove();
    this._element = null;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__icon");
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleButtonLikeClick();
    });

    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => {
        this._handleButtonDelClick();
      });
    this._image.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }
}
