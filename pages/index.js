import Card from "../components/Сard.js";
import { initialCards } from "../utils/cards-array-constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  validationConfig,
  containerTest,
  nameInput,
  jobInput,
  profileButton,
  placeButton,
  profilePopup,
  placePopup,
  imagePopup,
  profileName,
  profileAbout,
} from "../utils/constants.js";

const validatorProfile = new FormValidator(validationConfig, profilePopup);
const validatorPlace = new FormValidator(validationConfig, placePopup);
validatorProfile.enableValidation();
validatorPlace.enableValidation();

const userInfo = new UserInfo(profileName, profileAbout);
const popupImage = new PopupWithImage(imagePopup);

const popupProfileForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
    popupProfileForm.close();
  },
});
function createCard(item) {
  const card = new Card(item.name, item.link, ".card-template_type_default", {
    handleImageClick: () => {
      popupImage.open(item.name, item.link);
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const popupPlaceForm = new PopupWithForm(placePopup, {
  handleFormSubmit: (item) => {
    createCard(item);
    defaultCardList.addItem(createCard(item));
    popupPlaceForm.close();
  },
});

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item);
      defaultCardList.addItem(createCard(item));
    },
  },
  containerTest
);
defaultCardList.render();

popupProfileForm.setEventListeners();
popupPlaceForm.setEventListeners();
popupImage.setEventListeners();

function generatePopupProfile() {
  const userData = userInfo.getUserInfo();
  popupProfileForm.open();
  userData;
  nameInput.value = userData.name;
  jobInput.value = userData.description;
  validatorProfile.resetValidationErrors();
}

function generatePopupPlace() {
  popupPlaceForm.open();
  validatorPlace.resetValidationErrors();
  validatorPlace.deactivateButton();
}

profileButton.addEventListener("click", () => {
  generatePopupProfile();
});

placeButton.addEventListener("click", () => {
  generatePopupPlace();
});
