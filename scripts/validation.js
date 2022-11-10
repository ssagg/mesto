// const settings = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: 'popup__button-submit',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible',
//   popupButtonSelector: '.popup__button'
// };


// const formElement = document.querySelector(settings.formSelector);
// const formInput = formElement.querySelector(settings.inputSelector);

// class FormValidator {
//   constructor(settings, formElement) {
//     this._formSelector = settings.formSelector;
//     this._inputSelector = settings.inputSelector;
//     this._submitButtonSelector = settings.submitButtonSelector;
//     this._inactiveButtonClass = settings.inactiveButtonClass;
//     this._inputErrorClass = settings.inputErrorClass;
//     this._errorClass = settings.errorClass;
//     this._popupButtonSelector = settings.popupButtonSelector;
//     this._formElement = formElement;
//     // this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
//     // this._buttonElement = this._formElement.querySelector(this._popupButtonSelector);
//   }

//   _showError = (formElement, inputElement, errorMessage) => {
//     const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(this._inputErrorClass);
//     formError.textContent = errorMessage;
//     formError.classList.add(this._errorClass);
//   };

//   _hideError = (formElement, inputElement) => {
//     const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(this._inputErrorClass);
//     formError.classList.remove(this._errorClass);
//     formError.textContent = "";
//   };
//   deactivateButton = (buttonElement) => {
//     buttonElement.setAttribute('disabled', true);
//     buttonElement.classList.add(this._inactiveButtonClass);
//     buttonElement.classList.remove(this._submitButtonSelector);
//   };

//   _activateButton = (buttonElement) => {
//     buttonElement.removeAttribute('disabled');
//     buttonElement.classList.remove(this._inactiveButtonClass);
//     buttonElement.classList.add(this._submitButtonSelector);
//   }

//   _toggleButtonState = (inputList, buttonElement, settings) => {
//     if (this._hasInvalidInput(inputList)) {
//       this.deactivateButton(buttonElement, settings);
//     } else {
//       this._activateButton(buttonElement, settings);
//     };
//   };

//   _hasInvalidInput = () => {
//     return this._inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   };

//   _checkInputValidity(formElement, inputElement, settings) {
//     if (!inputElement.validity.valid) {
//       console.log('chekinputvalidity')
//       this._showError(formElement, inputElement, formInput.validationMessage, settings);
//     } else {
//       this._hideError(formElement, inputElement, settings);
//     };
//   }

//   _setEventListeners = (settings, formElement) => {
//     const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
//     const buttonElement = this._formElement.querySelector(this._popupButtonSelector);
//     inputList.forEach((inputElement) => {
//     // this._inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         console.log('inputcount')
//         this._checkInputValidity(formElement, inputElement, settings),

//           this._toggleButtonState(inputList, buttonElement, settings)
//       });
//     });
//   }

//   enableValidation = () => {
//     this._setEventListeners();
//     console.log('enable vlaidation')
//   };
// }

// export { FormValidator }


// const settings = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: 'popup__button-submit',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible',
//   popupButtonSelector: '.popup__button'

// };

// const formElement = document.querySelector(settings.formSelector);
const formInput = document.querySelector('.popup__input')



class FormValidator {

  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._popupButtonSelector = settings.popupButtonSelector;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._popupButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  _showError = (formElement, inputElement, errorMessage) => {
    const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._errorClass);
  };

  _hideError = (formElement, inputElement) => {
    const formError = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    formError.classList.remove(this._errorClass);
    formError.textContent = "";
  };

  deactivateButton = () => {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._inactiveButtonClass);
    // buttonElement.classList.remove(this._submitButtonSelector);
  };

  _activateButton = () => {
    this._buttonElement.removeAttribute('disabled');
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    // buttonElement.classList.add(this._submitButtonSelector);
  }

  _toggleButtonState = (inputList, buttonElement, settings) => {
    if (this._hasInvalidInput(inputList)) {
      this.deactivateButton(buttonElement, settings);
    } else {
      this._activateButton(buttonElement, settings);
    };
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _checkInputValidity(formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
      this._showError(formElement, inputElement, formInput.validationMessage, settings);
    } else {
      this._hideError(formElement, inputElement, settings);
    };
  }

  _setEventListeners = (settings, formElement) => {
    // const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // const buttonElement = this._formElement.querySelector(this._popupButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, settings),
          this._toggleButtonState(this._inputList,  settings)
      });
    });
  }

  enableValidation = () => {
    this._setEventListeners();
  };
}

export { FormValidator}