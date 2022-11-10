import { Card } from './card.js'
import { initialCards } from './cards-array_constants.js'
import { FormValidator } from './validation.js'

// const settings = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: 'popup__button-submit',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible',
//   popupButtonSelector: '.popup__button'
// };

// const formElement = document.querySelector(settings.formSelector);
// // const formInput = formElement.querySelector(settings.inputSelector);

// const container = document.querySelector('.elements');
// const template = document.querySelector('.template');

// const profileButton = document.querySelector('.profile__edit-button');
// const placeButton = document.querySelector('.profile__add-button');

// const profilePopup = document.getElementById('popup-edit');

// const placePopup = document.getElementById('popup-add')
// const imagePopup = document.getElementById('popup-image');

// const popupProfileCloseButton = document.querySelector('.popup-profile__button-close');
// const profileName = document.querySelector('.profile__name');
// const profileAbout = document.querySelector('.profile__about');
// const formProfile = document.querySelector('.popup__container');
// const nameInput = document.querySelector('.popup__input_type_name');
// const jobInput = document.querySelector('.popup__input_type_about');
// const popupPlaceCloseButton = document.querySelector('.popup-place__button-close');
// const formPlaceElement = document.querySelector('.popup-place__container');
// const placeInputName = document.getElementById('place-name');
// const placeInputLink = document.getElementById('place-link');
// const formPlace = document.forms.place_edit;
// const placePopupSubmitButton = document.getElementById('button-place');
// const imagePopupData = document.querySelector('.popup-image__image')
// const popupImgCloseButton = document.querySelector('.popup-image__button-close');
// const popupImgTitle = document.querySelector('.popup-image__title')
// // const buttonDel = document.querySelector('.card__delete');
// // const buttonLike = document.querySelector('.card__icon');
// const popupOverlays = document.querySelectorAll('.popup');

// const formList = Array.from(formElement);
// formList.forEach((formElement) => {
//   const validator = new FormValidator(settings, formElement);
//   validator.enableValidation();
// });

// popupOverlays.forEach((overlay) => {
//   overlay.addEventListener('click', (evt) => {
//     if (evt.target === evt.currentTarget) {
//       closePopup(overlay);
//     };
//   });
// });

// const closeByEscape = (evt) => {
//   if (evt.key === 'Escape') {
//     popupOverlays.forEach((esc) => {
//       closePopup(esc);
//     });
//   };
// };

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
// };

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
// };

// function openPopupProfile() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileAbout.textContent;
//   openPopup(profilePopup);
//   const validator = new FormValidator(settings, formElement)
//   validator._hideError(formElement, nameInput, settings)
// };

// function openCard(name, link) {
//   imagePopupData.src = link;
//   imagePopupData.alt = name;
//   popupImgTitle.textContent = name;
//   openPopup(imagePopup)
// }

// function submitFormProfile(evt) {
//   evt.preventDefault();
//   profileAbout.textContent = jobInput.value;
//   profileName.textContent = nameInput.value;
//   closePopup(profilePopup);
// };

// const handleAddBtn = (evt) => {
//   evt.preventDefault();
//   // Card.createCard(placeInputName.value, placeInputLink.value, '.card-template_type_default');
//   const card = new Card(placeInputName.value, placeInputLink.value, '.card-template_type_default');
//   const cardElement = card.generateCard();
//   container.prepend(cardElement);
//   closePopup(placePopup);
//   const validator = new FormValidator(settings, formElement)
//   validator.deactivateButton(placePopupSubmitButton);
// };

// initialCards.forEach((item) => {
//   const card = new Card(item.name, item.link, '.card-template_type_default')
//   const cardElement = card.generateCard()
//   container.append(cardElement);
// });

// formPlaceElement.addEventListener('submit', handleAddBtn);
// profileButton.addEventListener('click', openPopupProfile);
// placeButton.addEventListener('click', () => {
//   openPopup(placePopup);
//   formPlace.reset();
// });
// formProfile.addEventListener('submit', submitFormProfile);
// popupProfileCloseButton.addEventListener('click', () => { closePopup(profilePopup) });
// popupPlaceCloseButton.addEventListener('click', () => { closePopup(placePopup); });
// popupImgCloseButton.addEventListener('click', () => { closePopup(imagePopup) });

// export { openCard }


const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: 'popup__button-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  popupButtonSelector: '.popup__button'

};

const formElement = document.querySelector(settings.formSelector);
// const formInput = formElement.querySelector(settings.inputSelector)

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

// const valid = new FormValidator(settings, formElement)

const card = new Card(placeInputName.value, placeInputLink.value, '.card-template_type_default');
const cardElement = card.generateCard();


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

// function createCard(name, link, templateSelector){
//   const card = new Card(name, link, templateSelector);
//   const cardElement = card.generateCard();
// }

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);


};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

function openPopupPlace() {

  openPopup(placePopup);
  valid.enableValidation();
  // const valid = new FormValidator(settings, formElement)
  valid._hideError(formElement, nameInput, settings)
  formPlace.reset();
};

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(profilePopup);
  // valid.enableValidation();
  // const valid = new FormValidator(settings, formElement)
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
  container.prepend(cardElement);
  closePopup(placePopup);
  // valid.enableValidation();
  // const valid = new FormValidator(settings, formElement)
  valid.deactivateButton();
};

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.card-template_type_default')
  const cardElement = card.generateCard()
  document.querySelector('.elements').append(cardElement);
});

formPlaceElement.addEventListener('submit', handleAddBtn);
profileButton.addEventListener('click', openPopupProfile);
placeButton.addEventListener('click', openPopupPlace
// () => {
//   // openPopup(placePopup);
//   // valid.enableValidation();
//   // formPlace.reset();

// }
);

formProfile.addEventListener('submit', submitFormProfile);
popupClose.addEventListener('click', () => { closePopup(profilePopup) });
popupPlaceClose.addEventListener('click', () => { closePopup(placePopup); });
popupImgClose.addEventListener('click', () => { closePopup(imagePopup) });

export { openCard }