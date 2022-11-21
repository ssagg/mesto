class Card {

  constructor(name, link, templateSelector, openCard) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._openCard = openCard;
    this._element = document.querySelector(this._templateSelector).content.querySelector('.card')
    this._image = this._element.querySelector('.card__image')
    this._likeButton = this._element.querySelector('.card__icon');
  }

  _handleButtonLike() {
    this._likeButton.classList.toggle('card__icon_active');
  }

  _handleButtonDel() {
    this._element.remove();
  };


  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleButtonLike
    });
    console.log(this._likeButton)

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      console.log("clicked")
      this._handleButtonDel();
      console.log(this)
    });
    console.log(this._element.querySelector('.card__delete'))
    console.log(this._element.querySelector('.card__delete').addEventListener)

    this._image.addEventListener('click', () => {
      this._openCard(this._name, this._link);
    });
    console.log(this._image.addEventListener)
    console.log(this._image)
  }
}

export { Card }