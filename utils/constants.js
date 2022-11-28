const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    popupButtonSelector: '.popup__button'
  };

  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const container = document.querySelector('.elements');
  const profileButton = document.querySelector('.profile__edit-button');
  const placeButton = document.querySelector('.profile__add-button');
  const profilePopup = document.querySelector('.popup-profile');
  const placePopup = document.querySelector('.popup-place');
  const imagePopup = document.querySelector('.popup-image');
  const profileName = document.querySelector('.profile__name');
  const profileAbout = document.querySelector('.profile__about');
  const formProfile = document.querySelector('.popup__container');
  const nameInput = document.querySelector('.popup__input_type_name');
  const jobInput = document.querySelector('.popup__input_type_about');
  const formPlaceElement = document.querySelector('.popup-place__container');
  const placeInputName = document.getElementById('place-name');
  const placeInputLink = document.getElementById('place-link');
  const formPlace = document.forms.place_edit;
  const imagePopupData = document.querySelector('.popup-image__image');
  const popupImgTitle = document.querySelector('.popup-image__title');
  const popups = document.querySelectorAll('.popup');
  const containerTest = '.elements';

  export {initialCards, settings, container, profileButton, placeButton, profilePopup, placePopup, imagePopup,
  profileName, profileAbout, formProfile, nameInput, jobInput, formPlaceElement, placeInputName, placeInputLink,
formPlace, imagePopupData, popupImgTitle, popups, containerTest}