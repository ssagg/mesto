// import { profileName, profileAbout, nameInput, jobInput } from "../utils/constants.js";

export default class UserInfo{
    constructor(profileName,profileAbout) {
    this._profileName = profileName;
    this._profileAbout = profileAbout;
    this._nameInput = document.querySelector('.popup__input_type_name');
    this._jobInput = document.querySelector('.popup__input_type_about');
    }

    getUserInfo(){
    this._nameInput.value = this._profileName.textContent;
    this._jobInput.value = this._profileAbout.textContent;
    }

    setUserInfo(){
    this._profileAbout.textContent = this._jobInput.value;
    this._profileName.textContent = this._nameInput.value;
    }
}


// function openPopupProfile() {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileAbout.textContent;
//     openPopup(profilePopup);
//     validatorProfile.hidePopupErrors()
//   };

//   function submitFormProfile(evt) {
//     evt.preventDefault();
//     profileAbout.textContent = jobInput.value;
//     profileName.textContent = nameInput.value;
//     closePopup(profilePopup);
//   };