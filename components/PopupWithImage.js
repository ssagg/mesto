import Popup from "./popup.js";
import { imagePopupData } from "../utils/constants.js";
import { popupImgTitle } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
    }
    open(name, link) {
      super.open()
    //   this._image.src = this._link;
    //   this._image.alt = this._name;
      imagePopupData.src = link;
      imagePopupData.alt = name;
      popupImgTitle.textContent = name;

    }
  }