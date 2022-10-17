const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const container = document.querySelector('.elements');
const template = document.querySelector('.template');

const addButtonImage = document.getElementById('picture-submit');

const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');

const editProfilePopup = document.getElementById('popup-edit');
const addPlacePopup = document.getElementById('popup-add')

const popupClose = document.querySelector('.popup__button-close');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_about');

let popupPlaceClose = document.querySelector('.popup-place__button-close');
let formPlaceElement = document.querySelector('.popup-place__container');
const placeInputName = document.getElementById('place-name');
const placeInputLink = document.getElementById('place-link')


const modal = document.querySelector('.popup-image');
const popupImage = document.querySelector('.popup-image__image')
const popupImgClose = document.querySelector('.popup-image__button-close');
const popupImgTitle = document.querySelector('.popup-image__title')


const delBtn = document.querySelector('.card__delete');
const likeBtn = document.querySelector('.card__icon');

function openPopup(popup) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openImagePopup() {
  modal.classList.add('popup-image_opened');
}
function closeImgPopup() {
  modal.classList.remove('popup-image_opened');
}

editProfileButton.addEventListener('click', () => {openPopup(editProfilePopup)});
addPlaceButton.addEventListener('click', () => {openPopup(addPlacePopup)});

function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  profileAbout.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(editProfilePopup);
};

formElement.addEventListener('submit', formProfileSubmitHandler);
popupClose.addEventListener('click', () => {closePopup(editProfilePopup)});
popupPlaceClose.addEventListener('click', () => {closePopup(addPlacePopup)});
popupImgClose.addEventListener('click', closeImgPopup);

const render = () => {
  initialCards.forEach((item) => {
    const currentItem = createItemNode(item.name, item.link);
    container.append(currentItem);
  });
  formPlaceElement.addEventListener('submit', handleAddBtn);
};
const createItemNode = (name, link) => {
  const currentItem = template.content.cloneNode(true);
  const cardLink = currentItem.querySelector('.card__image');
  const cardName = currentItem.querySelector('.card__title');
  const cardLike = currentItem.querySelector('.card__icon');
  const delButton = currentItem.querySelector('.card__delete');
  cardLink.src = link;
  cardLink.alt = name;
  cardName.textContent = name;

  cardLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__icon_active');
  });

  delButton.addEventListener('click', handleDelBtn);

  cardLink.addEventListener('click', function (evt) {
    popupImage.src = cardLink.src;
    popupImage.alt = cardLink.alt;
    popupImgTitle.textContent = cardName.textContent;

    openImagePopup();

  });

  return currentItem;
};

const handleAddBtn = (evt) => {
  evt.preventDefault();
  const item = createItemNode(placeInputName.value, placeInputLink.value);
  placeInputName.value = "";
  placeInputLink.value = "";
  container.prepend(item);
  closePopup(addPlacePopup);
};

const handleDelBtn = (e) => {
  const cardEl = e.target.closest('.card');
  cardEl.remove();
};

render();