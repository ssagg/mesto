import { Card } from '../components/card.js'
import { initialCards } from '../utils/cards-array-constants.js'
import { FormValidator } from '../components/validation.js'
import Section from '../components/Section.js';
import { containerTest } from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { settings } from '../utils/constants.js';

const profileButton = document.querySelector('.profile__edit-button');
const placeButton = document.querySelector('.profile__add-button');
const profilePopup = document.querySelector('.popup-profile');
const placePopup = document.querySelector('.popup-place');
const imagePopup = document.querySelector('.popup-image');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');


const validatorProfile = new FormValidator(settings, profilePopup)
const validatorPlace = new FormValidator(settings, placePopup)
validatorProfile.enableValidation();
validatorPlace.enableValidation();

const userForm = new UserInfo(profileName, profileAbout);
const popupProfileClass = new Popup(profilePopup);
const popupPlaceClass = new Popup(placePopup);
const popupImageClass = new PopupWithImage(imagePopup)

const popupProfileForm = new PopupWithForm(
  profilePopup,{ handleFormSubmit: () => {
    userForm.setUserInfo();
    popupProfileClass.close();
  }
})

const popupPlaceForm = new PopupWithForm(
  placePopup,{ handleFormSubmit: (formData) => {
    const card = new Card(formData['place-name'],formData['place-link'], '.card-template_type_default',{openCard: () => {
      popupImageClass.open(formData['place-name'], formData['place-link']);
    }});
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  },
})
popupProfileForm.setEventListeners()
popupPlaceForm.setEventListeners()
// popupProfileClass.setEventListeners();
// popupPlaceClass.setEventListeners();
popupImageClass.setEventListeners();

const defaultCardList = new Section({
  cards: initialCards, renderer: (item) => {
    const card = new Card(item.name, item.link, '.card-template_type_default', {openCard: () => {
      popupImageClass.open(item.name, item.link);
    }}
    );
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, containerTest);
defaultCardList.render()



// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close') ) {
//       closePopup(popup)
//     }
//   })
// })

// const closeByEscape = (evt) => {

//   if (evt.key === 'Escape' && document.querySelector('.popup_opened')) {
//     closePopup(document.querySelector('.popup_opened'))
//   };
// };

// const createCard = (name, link) => {
//   const card = new Card(name, link, '.card-template_type_default', openCard);
//   const cardElement = card.generateCard();
//   return cardElement;
// };

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
// };

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
// };

// function openPopupPlace() {
//   // openPopup(placePopup);
//   popupPlaceClass.open()
//   validatorPlace.hidePopupErrors()
//   // formPlace.reset();
//   validatorPlace.deactivateButton();
// };

// function openPopupProfile() {
//   userForm.getUserInfo();
//   popupProfileClass.open();
//   // nameInput.value = profileName.textContent;
//   // jobInput.value = profileAbout.textContent;
//   // openPopup(profilePopup);
//   validatorProfile.hidePopupErrors()
// };

// function openCard(name, link) {
//   // imagePopupData.src = link;
//   // imagePopupData.alt = name;
//   // popupImgTitle.textContent = name;
//   popupImageClass.open(name, link)
//   // openPopup(imagePopup)
// }

// function submitFormProfile(evt) {
//   evt.preventDefault();
//   userForm.setUserInfo();
//   popupProfileClass.close();
//   // profileAbout.textContent = jobInput.value;
//   // profileName.textContent = nameInput.value;
//   // closePopup(profilePopup);

// };

// const handleAddBtn = (evt) => {
//   evt.preventDefault();
//   container.prepend(defaultCardList(placeInputName.value, placeInputLink.value, '.card-template_type_default'));
//   // closePopup(placePopup);
//   popupPlaceClass.close();
// };

// initialCards.forEach((item) => {
//   container.append(createCard(item.name, item.link, '.card-template_type_default'));
// });

profileButton.addEventListener('click', () => {
  popupProfileClass.open();
  userForm.getUserInfo();
  validatorProfile.hidePopupErrors()
});

placeButton.addEventListener('click', ()=>{
  popupPlaceClass.open()
  validatorPlace.hidePopupErrors()
  validatorPlace.deactivateButton();
});
// formPlaceElement.addEventListener('submit', handleAddBtn);
// profileButton.addEventListener('click', openPopupProfile);
// placeButton.addEventListener('click', openPopupPlace);
// formProfile.addEventListener('submit', submitFormProfile);

