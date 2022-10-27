const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: 'popup__button-submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }

const formElement = document.querySelector(settings.formSelector);
const formInput = formElement.querySelector(settings.inputSelector)
const formError = formElement.querySelector(`#${formInput.id}-error`);
const button = formElement.querySelector('#button');

const showError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(settings.errorClass);
};

const hideError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  formError.classList.remove(settings.errorClass);
  formError.textContent = "";
};

const setSubmitBtnState = (isActive) => {
  if (isActive) {
    button.removeAttribute('disabled')
    button.classList.remove(settings.inactiveButtonClass);
    button.classList.add(settings.submitButtonSelector);
  } else {
    button.setAttribute('disabled', true)
    button.classList.add(settings.inactiveButtonClass);
    button.classList.remove(settings.submitButtonSelector);
  }
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, formInput.validationMessage);
    setSubmitBtnState(false);
  } else {
    hideError(formElement, inputElement);
    setSubmitBtnState(true);
  }
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement)
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();

// formInput.addEventListener('input', function () {
//   checkInputValidity();
// });

//1

// const setSubmitBtnState = (isActive) => {
//   if (isActive) {
//     button.removeAttribute('disabled')
//     button.classList.remove('popup__button_disabled');
//     button.classList.add('popup__button-submit');
//   } else {
//     button.setAttribute('disabled', true)
//     button.classList.add('popup__button_disabled');
//     button.classList.remove('popup__button-submit');
//   }
// }

// const showInputError = (element) => {
//   console.log("input valid");
//   errorElement.textContent = inputElement.validationMessage;
//   formInputElement.classList.add('popup__input_type_error');


// }

// const hideInputError = (element) => {
//   console.log("input valid");
//   errorElement.textContent = '';
//   formInputElement.classList.remove('popup__input_type_error');

// }

// const validateInput = (inputElement) => {
//   const errorElement = form.querySelector(`#${inputElement.id}-error`);
//   const formInputElement = form.querySelector(`#${inputElement.id}`);

//   if (inputElement.checkValidity()) {
//  hideInputError(inputElement);


//   } else {
 // showInputError(inputElement);

//   }

//   if (form.checkValidity()) {
//     setSubmitBtnState(true);
//   } else {
//     setSubmitBtnState(false)
//   }
// };


// const validateForm = (event) => {
//   event.preventDefault();

//   validateInput(nameInputTest);

//   validateInput(aboutInputTest);

//   if (form.checkValidity()) {
//     console.log("valid");

//     form.reset();
//   } else {
//     console.log('invalid')
//   }
// };

// const validateFormInput = (event) => {
//   console.log('typing')
//   validateInput(event.target);
// }

// form.addEventListener('submit', validateForm);
// form.addEventListener('input', validateFormInput);

//2

// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('popup__input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('popup__error_visible');
//   };

//   const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove('form__input_type_error');
//     errorElement.classList.remove('popup__error_visible');
//     errorElement.textContent = '';
//   };

//   const checkInputValidity = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//       hideInputError(formElement, inputElement);
//     }
//   };

  // const setEventListeners = (formElement) => {
  //   const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  //   inputList.forEach((inputElement) => {
  //     inputElement.addEventListener('input', function () {
  //       checkInputValidity(formElement, inputElement);
  //     });
  //   });
  // };

  // const enableValidation = () => {
  //   const formList=Array.from(document.querySelectorAll('.form'));
  //  formList.forEach((formElement) => {
  //   formElement.addEventListener('submit', (evt) => {
  //     evt.preventDefault();
  //   });

  //     setEventListeners(formElement);
  // });
  // }
  // enableValidation ();

  // enableValidation({
  //   formSelector: '.popup__form',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__button',
  //   inactiveButtonClass: 'popup__button_disabled',
  //   inputErrorClass: 'popup__input_type_error',
  //   errorClass: 'popup__error_visible'
  // });

