import Popup from "./popup.js";
import { formPlace } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__form')
    }
    //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
  _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._form.querySelectorAll('.popup__input');
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        // возвращаем объект значений
        console.log(this._formValues)
        return this._formValues;
    }
  setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            // userForm.setUserInfo();
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}