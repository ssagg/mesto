export default class Card {
  constructor(
    data,
    templateSelector,
    handleImageClick,
    handleDeleteCardClick,
    handleLikeClick,
    _id
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likesLength = data.likes.length;
    this._cardOwnerId = data.owner._id;
    this._cardLikes = data.likes;
    this._cardId = data._id;
    this._myUserId = _id;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeClick = handleLikeClick;
  }

  deleteCardConfirm() {
    this._element.remove();
    this._element = null;
  }

  _hideDeleteButton() {
    if (this._cardOwnerId !== this._myUserId) {
      this._element.querySelector(".card__delete").remove();
    }
  }

  setLike(datalikes) {
    this._cardLikes = datalikes;
    this._likeCounter.textContent = this._cardLikes.length;

    if (this.isLiked()) {
      this._enableIcon();
    } else {
      this._disableIcon();
    }
  }

  isLiked() {
    const isLiked = this._cardLikes.some((user) => user._id === this._myUserId);
    return isLiked;
  }

  _enableIcon() {
    this._likeButton.classList.add("card__icon_active");
  }
  _disableIcon() {
    this._likeButton.classList.remove("card__icon_active");
  }

  _unsetLike(datalikes) {
    this._cardLikes = datalikes;
    this._likeCounter.textContent = this._cardLikes.length;
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
    this._likeCounter = this._element.querySelector(".card__like-counter");
    this._likeCounter.textContent = this._likesLength;
    this._deleteButton = this._element.querySelector(".card__delete");
    this._hideDeleteButton();
    this.setLike(this._cardLikes);
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this._cardId);
    });

    if (this._deleteButton) {
      this._deleteButton.addEventListener("click", () => {
        this._handleDeleteCardClick(this._cardId);
      });
    }

    this._image.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }
}
