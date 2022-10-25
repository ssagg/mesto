const form = document.querySelector('.popup-profile__form');
const nameInputTest = form.querySelector('#profile-name');
const aboutInputTest = form.querySelector('#profile-about');
const button = form.querySelector('#button');


const setSubmitBtnState = (isActive) => {
  if (isActive) {
    button.classList.remove('popup__button_disabled');
    button.classList.add('popup__button-submit');
  } else {
    button.classList.add('popup__button_disabled');
    button.classList.remove('popup__button-submit');
  }
}

const validateInput = (inputElement) => {
  const errorElement = form.querySelector(`#${inputElement.id}-error`);
  //errorElement.classList.add('.popup__input_type_error')


  if (inputElement.checkValidity()) {
    console.log("input valid");
    errorElement.textContent = '';
  } else {
    console.log('input invalid')
    errorElement.textContent = inputElement.validationMessage;
  }

  if (form.checkValidity()) {
    setSubmitBtnState(true);
  } else {
    setSubmitBtnState(false)
  }
};


const validateForm = (event) => {
  event.preventDefault();

  validateInput(nameInputTest);

  validateInput(aboutInputTest);

  if (form.checkValidity()) {
    console.log("valid");
    form.reset();
  } else {
    console.log('invalid')
  }
};

const validateFormInput = (event) => {
  console.log('typing')
  validateInput(event.target);
}

form.addEventListener('submit', validateForm);
form.addEventListener('input', validateFormInput);

// // const showInputError = (formElement, inputElement, errorMessage) => {
// //     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
// //     inputElement.classList.add('form__input_type_error');
// //     errorElement.textContent = errorMessage;
// //     errorElement.classList.add('form__input-error_active');
// //   };

// //   const hideInputError = (formElement, inputElement) => {
// //     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
// //     inputElement.classList.remove('form__input_type_error');
// //     errorElement.classList.remove('form__input-error_active');
// //     errorElement.textContent = '';
// //   };

// //   const checkInputValidity = (formElement, inputElement) => {
// //     if (!inputElement.validity.valid) {
// //       showInputError(formElement, inputElement, inputElement.validationMessage);
// //     } else {
// //       hideInputError(formElement, inputElement);
// //     }
// //   };

// //   const setEventListeners = (formElement) => {
// //     const inputList = Array.from(formElement.querySelectorAll('.form__input'));
// //     inputList.forEach((inputElement) => {
// //       inputElement.addEventListener('input', function () {
// //         checkInputValidity(formElement, inputElement);
// //       });
// //     });
// //   };

// //   // const enableValidation = () => {
// //   //   const formList=Array.from(document.querySelectorAll('.form'));
// //   //  formList.forEach((formElement) => {
// //   //   formElement.addEventListener('submit', (evt) => {
// //   //     evt.preventDefault();
// //   //   });

// //       setEventListeners(formElement);
// //   });
// //   }
// //   enableValidation({
// //     formSelector: '.popup__form',
// //     inputSelector: '.popup__input',
// //     submitButtonSelector: '.popup__button',
// //     inactiveButtonClass: 'popup__button_disabled',
// //     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   });

