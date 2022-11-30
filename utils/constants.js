const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  popupButtonSelector: ".popup__button",
};

const profileButton = document.querySelector(".profile__edit-button");
const placeButton = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector(".popup-profile");
const placePopup = document.querySelector(".popup-place");
const imagePopup = document.querySelector(".popup-image");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_about");
const imagePopupData = document.querySelector(".popup-image__image");
const popupImgTitle = document.querySelector(".popup-image__title");
const containerTest = ".elements";

export {
  validationConfig,
  profileButton,
  placeButton,
  profilePopup,
  placePopup,
  imagePopup,
  profileName,
  profileAbout,
  nameInput,
  jobInput,
  imagePopupData,
  popupImgTitle,
  containerTest,
};
