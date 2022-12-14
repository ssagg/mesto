import "./index.css";
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import { api } from "../components/Api.js";
import {
  validationConfig,
  containerCards,
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
  cardDeletePopup,
} from "../utils/constants.js";

let ownerId = "мой id";

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialServerCards]) => {
    userInfo.setUserInfo(userData);
    ownerId = userData._id;
    cardSection.render(initialServerCards.reverse());
  })
  .catch((error) => {
    console.log(error);
  });

function createCard(cardData) {
  const card = new Card(
    cardData,
    ".card-template_type_default",
    () => {
      popupImage.open(cardData.name, cardData.link);
    },
    (id) => {
      popupDeleteCard.open();
      popupDeleteCard.changeSubmitHandler(() => {
        popupDeleteCard.renderLoading("Сохранение...");
        api
          .deleteCard(id)
          .then(() => {
            card.deleteCardConfirm();
            popupDeleteCard.close();
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            popupDeleteCard.renderLoading("Да");
          });
      });
    },
    (id) => {
      if (card.isLiked()) {
        api
          .deleteLike(id)
          .then((likesData) => {
            card.setLike(likesData.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api
          .setLike(id)
          .then((likesData) => {
            card.setLike(likesData.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    ownerId
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const cardSection = new Section(
  {
    renderer: (cardData) => {
      cardSection.addItem(createCard(cardData));
    },
  },
  containerCards
);

const handleProfileFormSubmit = (userData) => {
  popupProfileForm.renderLoading("Сохранение...");
  api
    .sendUserInfo({ name: userData.name, about: userData.about })
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupProfileForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupProfileForm.renderLoading("Сохранить");
    });
};

const handleAvatarFormSubmit = (avatar) => {
  popupAvatar.renderLoading("Сохранение...");
  api
    .sendAvatar(avatar)
    .then((avatar) => {
      profileAvatar.src = avatar.avatar;
      popupAvatar.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupAvatar.renderLoading("Сохранить");
    });
};

const handleNewCardFormSubmit = (cardData) => {
  popupPlaceForm.renderLoading("Сохранение...");
  api
    .addNewCard({ name: cardData.name, link: cardData.link })
    .then((newCard) => {
      cardSection.addItem(createCard(newCard));
      popupPlaceForm.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupPlaceForm.renderLoading("Создать");
    });
};

const validatorProfile = new FormValidator(validationConfig, profilePopup);
const validatorPlace = new FormValidator(validationConfig, placePopup);
const validatorAvatar = new FormValidator(validationConfig, avatarPopup);

validatorAvatar.enableValidation();
validatorProfile.enableValidation();
validatorPlace.enableValidation();

const userInfo = new UserInfo(profileName, profileAbout, profileAvatar);
const popupAvatar = new PopupWithForm(avatarPopup, handleAvatarFormSubmit);
const popupProfileForm = new PopupWithForm(
  profilePopup,
  handleProfileFormSubmit
);
const popupPlaceForm = new PopupWithForm(placePopup, handleNewCardFormSubmit);
const popupDeleteCard = new PopupWithSubmit(cardDeletePopup);
const popupImage = new PopupWithImage(imagePopup);

popupProfileForm.setEventListeners();
popupPlaceForm.setEventListeners();
popupImage.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

function openPopupProfile() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupProfileForm.open();
  validatorProfile.resetValidationErrors();
}

function openPopupPlace() {
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
  openPopupProfile();
});

placeButton.addEventListener("click", () => {
  openPopupPlace();
});
profileAvatar.addEventListener("click", () => {
  openPopupAvatar();
});
