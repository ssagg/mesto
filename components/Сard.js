export default class Card {

  constructor(name, link, templateSelector, {openCard}) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._openCard = openCard;
  }

  _handleButtonLike() {
    this._likeButton.classList.toggle('card__icon_active');
  }

  _handleButtonDel() {
    this._element.remove();
    this._element = null;
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
<<<<<<< HEAD:scripts/card.js
    this._image = this._element.querySelector('.card__image');
=======
    this._image = this._element.querySelector('.card__image')
>>>>>>> pr8_classes:components/Сard.js
    this._likeButton = this._element.querySelector('.card__icon');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
<<<<<<< HEAD:scripts/card.js
      this._handleButtonLike();
=======
      this._handleButtonLike()
>>>>>>> pr8_classes:components/Сard.js
    });

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleButtonDel();
    });
<<<<<<< HEAD:scripts/card.js
=======

>>>>>>> pr8_classes:components/Сard.js
    this._image.addEventListener('click', () => {
      this._openCard(this._name, this._link);
    });
  }
}
