class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;

}
open(){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}
close(){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}
_handleEscClose(){
    const closeByEscape = (evt) => {

        if (evt.key === 'Escape' && document.querySelector('.popup_opened')) {
          closePopup(document.querySelector('.popup_opened'))
        };
      };
}
setEventListeners(){
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close') ) {
            closePopup(popup)
          }
        })
      })
}
}

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
}
open(){

}
}

class PopupWithForm extends Popup {
    constructor(popupSelector, callback) {
    }
    //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues(){


    }
    setEventListeners(){

    }
    close(){

    }
}
// Класс `UserInfo` отвечает за управление отображением информации о пользователе на странице. Этот класс:

// - Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// - Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// - Содержит публичный метод `setUserInfo,` который принимает новые данные пользователя и добавляет их на страницу.

class UserInfo {
    constructor({profileName,profileAbout}) {
            this.name = '';
            this.email = '';
}
getUserInfo(){

}
setUserInfo(){

}
}
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close') ) {
        closePopup(popup)
      }
    })
  })

  const closeByEscape = (evt) => {

    if (evt.key === 'Escape' && document.querySelector('.popup_opened')) {
      closePopup(document.querySelector('.popup_opened'))
    };
  };

  const createCard = (name, link) => {
    const card = new Card(name, link, '.card-template_type_default', openCard);
    const cardElement = card.generateCard();
    return cardElement;
  };

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
    validatorPlace.hidePopupErrors()
    formPlace.reset();
    validatorPlace.deactivateButton();
  };

  function openPopupProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    openPopup(profilePopup);
    validatorProfile.hidePopupErrors()
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
    container.prepend(createCard(placeInputName.value, placeInputLink.value, '.card-template_type_default'));
    closePopup(placePopup);
  };

  initialCards.forEach((item) => {
    container.append(createCard(item.name, item.link, '.card-template_type_default'));
  });

  formPlaceElement.addEventListener('submit', handleAddBtn);
  profileButton.addEventListener('click', openPopupProfile);
  placeButton.addEventListener('click', openPopupPlace);
  formProfile.addEventListener('submit', submitFormProfile);

