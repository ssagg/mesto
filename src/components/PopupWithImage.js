import Popup from "./Popup.js";
import { imagePopupData, popupImgTitle } from "../utils/constants.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = imagePopupData;
    this._title = popupImgTitle;
  }

  open(name, link) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
  }
}
