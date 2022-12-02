import "./index.css";
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

function createCard(cardData) {
  const card = new Card(
    cardData.name,
    cardData.link,
    ".card-template_type_default",
    {
      handleImageClick: () => {
        popupImage.open(cardData.name, cardData.link);
      },
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const popupPlaceForm = new PopupWithForm(placePopup, {
  handleFormSubmit: (cardData) => {
    cardsSection.addItem(createCard(cardData));
    popupPlaceForm.close();
  },
});

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsSection.addItem(createCard(item));
    },
  },
  containerTest
);
cardsSection.render();

popupProfileForm.setEventListeners();
popupPlaceForm.setEventListeners();
popupImage.setEventListeners();

function openProfilePopup() {
  const userData = userInfo.getUserInfo();
  popupProfileForm.open();
  nameInput.value = userData.name;
  jobInput.value = userData.description;
  validatorProfile.resetValidationErrors();
}

function openPlacePopup() {
  popupPlaceForm.open();
  validatorPlace.resetValidationErrors();
  validatorPlace.deactivateButton();
}

profileButton.addEventListener("click", () => {
  openProfilePopup();
});

placeButton.addEventListener("click", () => {
  openPlacePopup();
});
