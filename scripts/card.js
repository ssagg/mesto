import { openCard } from './index.js'
class Card {
  constructor(name, link, templateSelector, openCard) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._openCard = openCard;

  }

  _setEventListeners() {
    this._element.querySelector('.card__icon').addEventListener('click', () => {
      this._handleButtonLike()
    });

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleButtonDel()
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      // imagePopupData.src = this._link;
      // imagePopupData.alt = this._name;
      // popupImgTitle.textContent = this._name;
      openCard(this._name, this._link);
    });

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
    this._setEventListeners();
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    return this._element;
  }
createCard(name, link, templateSelector){
  const card = new Card(name, link, templateSelector);
  const cardElement = card.generateCard();
}
}

export { Card }