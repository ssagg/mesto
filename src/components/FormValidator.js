export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._popupButtonSelector = settings.popupButtonSelector;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(
      this._popupButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
  }

  resetValidationErrors = () => {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
    this._toggleButtonState();
  };

  _showError = (inputElement, errorMessage) => {
    const inputError = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    inputError.textContent = errorMessage;
    inputError.classList.add(this._errorClass);
  };

  _hideError = (inputElement) => {
    const inputError = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._errorClass);
    inputError.textContent = "";
  };

  deactivateButton = () => {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._inactiveButtonClass);
  };

  _activateButton = () => {
    this._buttonElement.removeAttribute("disabled");
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.deactivateButton();
    } else {
      this._activateButton();
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}
