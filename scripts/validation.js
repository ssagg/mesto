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
// const formError = formElement.querySelector(`#${formInput.id}-error`);

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

  }

  _showError =(formElement, inputElement, errorMessage, settings)=> {
    console.log('_showError call')
  const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(this._errorClass);
};

  _hideError = (formElement, inputElement, settings) => {
  console.log('_hideError call')
  const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  formError.classList.remove(this._errorClass);
  formError.textContent = "";
};
 _deactivateButton = (buttonElement, settings) => {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(this._inactiveButtonClass);
  buttonElement.classList.remove(this._submitButtonSelector);
};

 _activateButton = (buttonElement, settings) => {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(this._inactiveButtonClass);
  buttonElement.classList.add(this._submitButtonSelector);
}

 _toggleButtonState = (inputList, buttonElement, settings) => {
  if (this._hasInvalidInput(inputList)) {
    this._deactivateButton(buttonElement, settings);
  } else {
    this._activateButton(buttonElement, settings);
  };
};

 _hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

  _checkInputValidity(formElement, inputElement, settings){
    console.log('_checkInputValidity call')

  if (!inputElement.validity.valid) {
    this._showError(formElement, inputElement, formInput.validationMessage, settings);
  } else {
    this._hideError(formElement, inputElement, settings);
  };
}

  _setEventListeners=(settings, formElement)=>{
    console.log('set listener')

    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    console.log(inputList)
    const buttonElement = this._formElement.querySelector(this._popupButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
         this._checkInputValidity(formElement, inputElement, settings),
         this._toggleButtonState(inputList, buttonElement, settings),
         console.log('set listener count')
    });
    });
  }

  enableValidation=()=>{
    console.log("enable validation")
   this._setEventListeners();
  };
  }

  export {FormValidator, settings, formElement}



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
