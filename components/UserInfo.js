export default class UserInfo{
  constructor(profileName,profileAbout) {
    this._profileName = profileName;
    this._profileAbout = profileAbout;
    }

  getUserInfo(){
    const name = this._profileName.textContent;
    const description = this._profileAbout.textContent;
    const userData = {name, description}
    return userData
    }

  setUserInfo(data){
    this._profileName.textContent = data['profile-name'];
    this._profileAbout.textContent = data['profile-about'];
    }
}
