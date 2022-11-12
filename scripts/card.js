class Card {
  constructor(name, link, templateSelector, openCard) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._openCard = openCard;
  }

  _handleButtonLike() {
    this._element.querySelector('.card__icon').classList.toggle('card__icon_active');
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
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__icon').addEventListener('click', () => {
      this._handleButtonLike();
    });

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleButtonDel();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._openCard(this._name, this._link);
    });
  }
}

export { Card }