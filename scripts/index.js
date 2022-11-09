import { Card } from './card.js'
import { initialCards } from './array.js'
import { FormValidator, settings, formElement } from './validation.js'

// class Card {
//   constructor(name,link){
//     this._name = name;
//     this._link = link;
//   }

//   _setEventListeners() {
//     this._element.querySelector('.card__icon').addEventListener('click', ()=> {
//       this._handleButtonLike()
//     });

//     this._element.querySelector('.card__delete').addEventListener('click', ()=> {
//       this._handleButtonDel()
//     });

//     this._element.querySelector('.card__image').addEventListener('click', ()=> {
//           imagePopupData.src = this._link;
//           imagePopupData.alt = this._name;
//           popupImgTitle.textContent = this._name;
//           openPopup(imagePopup);
//         });

//   }
//   _handleButtonLike() {
//     this._element.querySelector('.card__icon').classList.toggle('card__icon_active');
//   }

//   _handleButtonDel() {

//     this._element.closest('.card').remove();
//   };

//   _getTemplate() {
//     const cardElement  = document.querySelector('.template').content.querySelector('.card').cloneNode(true);
//     return cardElement;
//   }
//   generateCard() {
//     this._element = this._getTemplate();
//     this._setEventListeners();

//     this._element.querySelector('.card__image').src = this._link;
//     this._element.querySelector('.card__image').alt = this._name;
//     this._element.querySelector('.card__title').textContent = this._name;

//     return this._element;
//   }
// }

// // export {Card}

// //

const container = document.querySelector('.elements');
const template = document.querySelector('.template');

const profileButton = document.querySelector('.profile__edit-button');
const placeButton = document.querySelector('.profile__add-button');

const profilePopup = document.getElementById('popup-edit');
const placePopup = document.getElementById('popup-add')
const imagePopup = document.getElementById('popup-image');

const popupClose = document.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formProfile = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_about');
const popupPlaceClose = document.querySelector('.popup-place__button-close');
const formPlaceElement = document.querySelector('.popup-place__container');
const placeInputName = document.getElementById('place-name');
const placeInputLink = document.getElementById('place-link');
const formPlace = document.forms.place_edit;
const placePopupSubmit = document.getElementById('button-place');
const imagePopupData = document.querySelector('.popup-image__image')
const popupImgClose = document.querySelector('.popup-image__button-close');
const popupImgTitle = document.querySelector('.popup-image__title')
const buttonDel = document.querySelector('.card__delete');
const buttonLike = document.querySelector('.card__icon');
const popupOverlays = document.querySelectorAll('.popup');

const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElement) => {
  const valid = new FormValidator(settings, formElement);
  valid.enableValidation();
});

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(overlay);
    };
  });
});

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    popupOverlays.forEach((esc) => {
      closePopup(esc);
    });
  };
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(profilePopup);
  const valid = new FormValidator(settings, formElement)
  valid._hideError(formElement, nameInput, settings)
};

function openCard(name, link) {
  imagePopupData.src = link;
  imagePopupData.alt = name;
  popupImgTitle.textContent = name;
  openPopup(imagePopup)
}

function submitFormProfile(evt) {
  evt.preventDefault();
  profileAbout.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(profilePopup);
};

const handleAddBtn = (evt) => {
  evt.preventDefault();
  const card = new Card(placeInputName.value, placeInputLink.value, '.card-template_type_default');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
  closePopup(placePopup);
  const valid = new FormValidator(settings, formElement)
  valid._deactivateButton(placePopupSubmit, settings);
};

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.card-template_type_default')
  const cardElement = card.generateCard()
  document.querySelector('.elements').append(cardElement);
});

formPlaceElement.addEventListener('submit', handleAddBtn);
profileButton.addEventListener('click', openPopupProfile);
placeButton.addEventListener('click', () => {
  openPopup(placePopup);
  formPlace.reset();
});
formProfile.addEventListener('submit', submitFormProfile);
popupClose.addEventListener('click', () => { closePopup(profilePopup) });
popupPlaceClose.addEventListener('click', () => { closePopup(placePopup); });
popupImgClose.addEventListener('click', () => { closePopup(imagePopup) });

export { openCard }