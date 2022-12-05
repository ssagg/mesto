// import "./index.css";
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithForm.js";
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
  profileName,
  profileAbout,
  profileAvatar,
  avatarPopup,
  cardLikeCounter,
  cardDeletePopup,
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
const validatorAvatar = new FormValidator(validationConfig, avatarPopup);
validatorAvatar.enableValidation();
validatorProfile.enableValidation();
validatorPlace.enableValidation();
let ownerId = "мой id";
// загрузка профиля с сервера
const userInfo = new UserInfo(profileName, profileAbout);
api
  .getUserInfo()
  .then((userData) => {
    profileName.textContent = userData.name;
    profileAbout.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    ownerId = userData._id;
    console.log(ownerId);
  })
  .catch((error) => {
    console.log(error);
  });

const popupImage = new PopupWithImage(imagePopup);

//  обновление профиля
const popupProfileForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (userData) => {
    api
      .sendUserInfo({ name: userData.name, about: userData.about })
      .then((userData) => {
        userInfo.setUserInfo(userData);
      })
      .catch((error) => {
        console.log(error);
      });
    popupProfileForm.close();
  },
});
//  обновление аватара
const popupAvatar = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (avatar) => {
    api
      .sendAvatar(avatar)
      .then((avatar) => {
        profileAvatar.src = avatar.avatar;
      })
      .catch((error) => {
        console.log(error);
      });
    popupAvatar.close();
  },
});

const popupDeleteCard = new PopupWithSubmit(cardDeletePopup, {
  handleFormSubmit: () => {
    api
      .deleteCard(id)
      .then((avatar) => {})
      .catch((error) => {
        console.log(error);
      });
    popupDeleteCard.close();
  },
});

function createCard(cardData) {
  const card = new Card(
    cardData,
    ".card-template_type_default",
    {
      handleImageClick: () => {
        popupImage.open(cardData);
      },
      handleDeleteCard: (id) => {
        api.deleteCard(id).then(() => {
          card.remove();
        });
      },
    },
    ownerId
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const popupPlaceForm = new PopupWithForm(placePopup, {
  handleFormSubmit: (cardData) => {
    api
      .addNewCard({ name: cardData.name, link: cardData.link })
      .then((newCard) => {
        console.log(newCard);
        defaultCardList.addItem(createCard(newCard));
      })
      .catch((error) => {
        console.log(error);
      });
    // defaultCardList.addItem(createCard(newCard));
    popupPlaceForm.close();
  },
});

const defaultCardList = new Section(
  {
    // items: initialServerCards,
    renderer: (cardData) => {
      defaultCardList.addItem(createCard(cardData));
    },
  },
  containerTest
);
//   defaultCardList.render();
// }

api
  .getInitialCards()
  .then((initialServerCards) => {
    defaultCardList.render(initialServerCards);
    console.log(initialServerCards);
  })
  .catch((error) => {
    console.log(error);
  });
// function createCardArray(initialServerCards) {
//   const defaultCardList = new Section(
//     {
//       items: initialServerCards.reverse(),
//       renderer: (item) => {
//         defaultCardList.addItem(createCard(item));
//       },
//     },
//     containerTest
//   );
//   defaultCardList.render();
// }

popupProfileForm.setEventListeners();
popupPlaceForm.setEventListeners();
popupImage.setEventListeners();
popupAvatar.setEventListeners();

function generatePopupProfile() {
  const userData = userInfo.getUserInfo();
  // userData = generateUserInfo(userServerInfo);
  // api
  //   .getUserInfo()
  //   .then((userData) => {
  //     nameInput.value = userData.name;
  //     jobInput.value = userData.about;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  popupProfileForm.open();

  nameInput.value = userData.name;
  jobInput.value = userData.about;
  validatorProfile.resetValidationErrors();
}

function generatePopupPlace() {
  popupPlaceForm.open();
  validatorPlace.resetValidationErrors();
  validatorPlace.deactivateButton();
}
function openPopupAvatar() {
  popupAvatar.open();
  validatorAvatar.resetValidationErrors();
  validatorAvatar.deactivateButton();
}

profileButton.addEventListener("click", () => {
  generatePopupProfile();
});

placeButton.addEventListener("click", () => {
  generatePopupPlace();
});
profileAvatar.addEventListener("click", () => {
  openPopupAvatar();
});
