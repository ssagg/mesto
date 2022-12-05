export default class Card {
  constructor(data, templateSelector, { handleImageClick }, _id) {
    this._name = data.name;
    this._link = data.link;
    this._userId = _id;
    this._likes = data.likes.length;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    console.log(this._ownerId);
    console.log(this._userId);
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
  _showCardLikes() {
    this._likeCounter = this._element.querySelector(".card__like-counter");
    this._likeCounter.textContent = this._likes;
  }
  _hidelDeleteButton() {
    if (this._ownerId !== this._userId) {
      // inputElement.classList.remove(this._inputErrorClass);
      this._element.querySelector(".card__delete").remove();
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._showCardLikes();
    this._hidelDeleteButton();
    this._image = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__icon");
    // this._likeCounter = this._element.querySelector(".card__like-counter");
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

    if (document.body.contains(this._element.querySelector(".card__delete"))) {
      this._element
        .querySelector(".card__delete")
        .addEventListener("click", () => {
          this._handleButtonDelClick();
        });
    }

    this._image.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }
}
