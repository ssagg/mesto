import Card from '../components/Сard.js'
import { initialCards } from '../utils/cards-array-constants.js'
import FormValidator from '../components/Validation.js'
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { settings, containerTest, nameInput, jobInput, profileButton,
  placeButton, profilePopup, placePopup, imagePopup, profileName, profileAbout} from '../utils/constants.js';

const validatorProfile = new FormValidator(settings, profilePopup)
const validatorPlace = new FormValidator(settings, placePopup)
validatorProfile.enableValidation();
validatorPlace.enableValidation();

const userForm = new UserInfo(profileName, profileAbout);
const popupProfileClass = new Popup(profilePopup);
const popupPlaceClass = new Popup(placePopup);
const popupImageClass = new PopupWithImage(imagePopup)

const popupProfileForm = new PopupWithForm(
  profilePopup,{ handleFormSubmit: (userData) => {
    userForm.setUserInfo(userData);
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

const defaultCardList = new Section({
  cards: initialCards, renderer: (item) => {
    const card = new Card(item.name, item.link, '.card-template_type_default', {openCard: () => {
      popupImageClass.open(item.name, item.link);
      }
    }
    );
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, containerTest);
defaultCardList.render();

popupProfileForm.setEventListeners();
popupPlaceForm.setEventListeners();
popupImageClass.setEventListeners();

profileButton.addEventListener('click', () => {
  popupProfileClass.open();
  userForm.getUserInfo();
  nameInput.value = userForm.getUserInfo().name;
  jobInput.value = userForm.getUserInfo().description;
  validatorProfile.hidePopupErrors();
});

placeButton.addEventListener('click', ()=>{
  popupPlaceClass.open()
  validatorPlace.hidePopupErrors()
  validatorPlace.deactivateButton();
});

