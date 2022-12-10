export default class UserInfo {
  constructor(profileName, profileAbout, profileAvatar) {
    this._profileName = profileName;
    this._profileAbout = profileAbout;
    this._profileAvatar = profileAvatar;
  }

  getUserInfo() {
    const name = this._profileName.textContent;
    const about = this._profileAbout.textContent;
    const avatar = this._profileAvatar.src;
    const userData = { name, about, avatar };
    return userData;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this._profileAvatar.src = data.avatar;
  }
}
