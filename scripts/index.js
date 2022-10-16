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
  //let cardName = document.querySelector('.card__text');
  //let cardImage = document.querySelector('.card__image');
  const container = document.querySelector('.elements');
  const template = document.querySelector('.template');
  const placeInputName = document.getElementById('place-name');
  const placeInputLink = document.getElementById('place-link')
  const addButtonImage = document.getElementById('picture-submit');

  let editButton = document.querySelector('.profile__edit-button');
  let addButton = document.querySelector('.profile__add-button');



  const editPopup = document.getElementById('popup-edit');
  const addPopup = document.getElementById('popup-add')
  let popupClose = document.querySelector('.popup__button-close');
  let profileName = document.querySelector('.profile__name');
  let profileAbout = document.querySelector('.profile__about');



  let formElement = document.querySelector('.popup__container');

  let nameInput = document.querySelector('.popup__input_type_name');
  let jobInput = document.querySelector('.popup__input_type_about');

 // let img = document.querySelector(".card__image");

  const popupImage = document.querySelector('.popup-image__image')
  const modal = document.querySelector(".popup__image");


  const delBtn = document.querySelector('.card__delete');
  const likeBtn = document.querySelector('.card__icon');
    

  //function openImagePopup() {
  //  modal.style.display = "none";
 // }
  
  function showClick() {
      nameInput.value = profileName.textContent;
      jobInput.value = profileAbout.textContent;
      editPopup.classList.add('popup_opened');
   
    }
    
    function showClick1() {
      addPopup.classList.add('popup_opened');
    }
    
    function closePopup() {
      addPopup.classList.remove('popup_opened');
    //  editPopup.classList.remove('popup_opened');
    }
    
   // editButton.addEventListener('click', showClick);
    addButton.addEventListener('click', showClick1);
   
    //function formSubmitHandler(evt) {
     // evt.preventDefault();
     // profileAbout.textContent = jobInput.value;
     // profileName.textContent = nameInput.value;
     // closePopup();
    //}
    
    //formElement.addEventListener('submit', formSubmitHandler);
    popupClose.addEventListener('click', closePopup);
    //addButtonImage.addEventListener('submit', createItemNode)
    


  const render = () => {
    initialCards.forEach((item) => {
      const currentItem = createItemNode (item.name, item.link);
      container.append(currentItem);
    });
    addButtonImage.addEventListener('submit', handleAddBtn);
    
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
    
    delButton.addEventListener('click',handleDelBtn );
    cardLink.addEventListener('click', openImagePopup);
    return currentItem;
  };

  const handleAddBtn= ()=> {

    const item = createItemNode(placeInputName.value, placeInputLink.value);
   // сardLink.src = placeInputLink.value;
   // cardName.textContent = placeInputName.value;
    console.log(сardLink.src,cardName.textContent)
    container.prepend(item);
    closePopup();
  };

  const handleDelBtn = (e) => {
    const cardEl = e.target.closest('.card');
    cardEl.remove();
  };

  const openImagePopup=() =>{
    const popupImage =  document.querySelector('.popup-image');
   //const cardLink = document.querySelector('.card__image');
    popupImage.classList.add('.popup-image_opened');
   // popupImage.src = cardLink.src;

}


// Get the modal
//const modal = document.getElementById("imagePopup");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//const img = document.querySelector(".card__image");
//const modalImg = document.getElementById("img01");
//const captionText = document.getElementById("caption");
//img.onclick = function(){
  ////modal.style.display = "block";
 // modalImg.src = this.src;
 // captionText.innerHTML = this.alt;
//}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal



  render();