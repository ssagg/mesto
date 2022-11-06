const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: 'popup__button-submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    popupButton: '.popup__button'
  };

const formElement = document.querySelector(settings.formSelector);
const formInput = formElement.querySelector(settings.inputSelector)
const formError = formElement.querySelector(`#${formInput.id}-error`);

class FormValidator {
  constructor(settings, formElement){
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._popupButton = settings.popupButton;
    this._formElement = formElement;
    this._formInput = formInput;
    this._formError = formError;
  }

  _showError =(formElement, inputElement, errorMessage, settings)=> {
  const formError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(settings.errorClass);
};

_hideError = (formElement, inputElement, settings) => {
  const formError = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  formError.classList.remove(settings.errorClass);
  formError.textContent = "";
};
 deactivateButton = (buttonElement, settings) => {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.classList.remove(settings.submitButtonSelector);
};

 activateButton = (buttonElement, settings) => {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(settings.inactiveButtonClass);
  buttonElement.classList.add(settings.submitButtonSelector);
}

 toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    deactivateButton(buttonElement, settings);
  } else {
    activateButton(buttonElement, settings);
  };
};

 hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
  _checkInputValidity=(formElement, inputElement, settings)=>{

  if (!inputElement.validity.valid) {
    _showError(formElement, inputElement, formInput.validationMessage, settings);
  } else {
    _hideError(formElement, inputElement, settings);
  };
}
  // const setEventListeners = (formElement, settings) => {
//   const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
//   const buttonElement = formElement.querySelector(settings.popupButton);
//   toggleButtonState(inputList, buttonElement, settings);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, settings);
//       toggleButtonState(inputList, buttonElement, settings);
//     });
//   });
// };
  _setEventListeners=()=>{
    console.log('set listener')
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    console.log(inputList)
    const buttonElement = formElement.querySelector(settings.popupButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        _checkInputValidity(this._formElement, inputElement, settings);

      });
    });
  }

  enableValidation=()=>{
    console.log("enable validation")
   this._setEventListeners();
  };

  }


  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    const valid = new FormValidator (settings, formElement);
    console.log(valid)
  });



// const showError = (formElement, inputElement, errorMessage, settings) => {
//   const formError = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(settings.inputErrorClass);
//   formError.textContent = errorMessage;
//   formError.classList.add(settings.errorClass);
// };

// const hideError = (formElement, inputElement, settings) => {
//   const formError = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(settings.inputErrorClass);
//   formError.classList.remove(settings.errorClass);
//   formError.textContent = "";
// };

// const deactivateButton = (buttonElement, settings) => {
//   buttonElement.setAttribute('disabled', true);
//   buttonElement.classList.add(settings.inactiveButtonClass);
//   buttonElement.classList.remove(settings.submitButtonSelector);
// };

// const activateButton = (buttonElement, settings) => {
//   buttonElement.removeAttribute('disabled');
//   buttonElement.classList.remove(settings.inactiveButtonClass);
//   buttonElement.classList.add(settings.submitButtonSelector);
// }

// const toggleButtonState = (inputList, buttonElement, settings) => {
//   if (hasInvalidInput(inputList)) {
//     deactivateButton(buttonElement, settings);
//   } else {
//     activateButton(buttonElement, settings);
//   };
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const checkInputValidity = (formElement, inputElement, settings) => {
//   if (!inputElement.validity.valid) {
//     showError(formElement, inputElement, formInput.validationMessage, settings);
//   } else {
//     hideError(formElement, inputElement, settings);
//   };
// };

// const setEventListeners = (formElement, settings) => {
//   const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
//   const buttonElement = formElement.querySelector(settings.popupButton);
//   toggleButtonState(inputList, buttonElement, settings);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, settings);
//       toggleButtonState(inputList, buttonElement, settings);
//     });
//   });
// };

// const enableValidation = (settings) => {
//   const formList = Array.from(document.querySelectorAll(settings.formSelector));
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, settings);
//   });
// };

// enableValidation(settings)
