export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  };

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose = (evt)=> {
    // const closeByEscape = (evt) => {
      if (evt.key === 'Escape' && document.querySelector('.popup_opened')) {
        // close(document.querySelector('.popup_opened'))
        this.close()
      };
    };
    // const closeByEscape = (evt) => {

    //     if (evt.key === 'Escape' && document.querySelector('.popup_opened')) {
    //       closePopup(document.querySelector('.popup_opened'))
    //     };
    //   };

  setEventListeners (){
    // this._popupSelector.forEach((popup) => {
      this._popupSelector.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
          // closePopup(popup)
          this.close();
        };
      });
    // })
  };
};

// class PopupWithImage extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//   }
//   open(name, link) {
//     super.open()
//     this._image.src = this._link;
//     this._image.alt = this._name;
//     imagePopupData.src = link;
//     imagePopupData.alt = name;
//     popupImgTitle.textContent = name;

//   }
// }

// class PopupWithForm extends Popup {
//   constructor(popupSelector, callback) {
//   }
//   //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
//   _getInputValues() {


//   }
//   setEventListeners() {

//   }
//   close() {

//   }
// }
// Класс `UserInfo` отвечает за управление отображением информации о пользователе на странице. Этот класс:

// - Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// - Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// - Содержит публичный метод `setUserInfo,` который принимает новые данные пользователя и добавляет их на страницу.


// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//       if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close') ) {
//         closePopup(popup)
//       }
//     })
//   })

//   const closeByEscape = (evt) => {

//     if (evt.key === 'Escape' && document.querySelector('.popup_opened')) {
//       closePopup(document.querySelector('.popup_opened'))
//     };
//   };

//   const createCard = (name, link) => {
//     const card = new Card(name, link, '.card-template_type_default', openCard);
//     const cardElement = card.generateCard();
//     return cardElement;
//   };

//   function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closeByEscape);
//   };

//   function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeByEscape);
//   };

//   function openPopupPlace() {
//     openPopup(placePopup);
//     validatorPlace.hidePopupErrors()
//     formPlace.reset();
//     validatorPlace.deactivateButton();
//   };

//   function openPopupProfile() {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileAbout.textContent;
//     openPopup(profilePopup);
//     validatorProfile.hidePopupErrors()
//   };

//   function openCard(name, link) {
//     imagePopupData.src = link;
//     imagePopupData.alt = name;
//     popupImgTitle.textContent = name;
//     openPopup(imagePopup)
//   }

//   function submitFormProfile(evt) {
//     evt.preventDefault();
//     profileAbout.textContent = jobInput.value;
//     profileName.textContent = nameInput.value;
//     closePopup(profilePopup);
//   };

//   const handleAddBtn = (evt) => {
//     evt.preventDefault();
//     container.prepend(createCard(placeInputName.value, placeInputLink.value, '.card-template_type_default'));
//     closePopup(placePopup);
//   };

//   initialCards.forEach((item) => {
//     container.append(createCard(item.name, item.link, '.card-template_type_default'));
//   });

//   formPlaceElement.addEventListener('submit', handleAddBtn);
//   profileButton.addEventListener('click', openPopupProfile);
//   placeButton.addEventListener('click', openPopupPlace);
//   formProfile.addEventListener('submit', submitFormProfile);

