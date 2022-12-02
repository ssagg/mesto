// import "./index.css";
import Card from "../components/Сard.js";
// import { initialCards } from "../utils/cards-array-constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
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
  // profileName,
  // profileAbout,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-55",
  headers: {
    authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
    "Content-Type": "application/json",
  },
});

const validatorProfile = new FormValidator(validationConfig, profilePopup);
const validatorPlace = new FormValidator(validationConfig, placePopup);
validatorProfile.enableValidation();
validatorPlace.enableValidation();

api.getUserInfo().then((res) => {
  UserInfo.setUserInfo(res);
  console.log(UserInfo.setUserInfo(res));
});

// function generateUserInfo(userServerInfo) {
//   console.log(userServerInfo);
//   console.log(userServerInfo.name);
//   console.log(userServerInfo.about);
const userInfo = new UserInfo(userServerInfo.name, userServerInfo.about);

// const userInfo = new UserInfo(profileName, profileAbout);
// }
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

// api.getUserInfo();
api.getInitialCards().then((res) => createCardArray(res));

function createCardArray(initialServerCards) {
  const defaultCardList = new Section(
    {
      items: initialServerCards.reverse(),
      renderer: (item) => {
        createCard(item);
        defaultCardList.addItem(createCard(item));
      },
    },
    containerTest
  );
  defaultCardList.render();
}
popupProfileForm.setEventListeners();
popupPlaceForm.setEventListeners();
popupImage.setEventListeners();

function generatePopupProfile() {
  // const userData = userInfo.getUserInfo();
  userData = generateUserInfo(userServerInfo);
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
