let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_about');

function showClick() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showClick);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileAbout.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', closePopup);