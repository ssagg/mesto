export default class Section {
  constructor({cards, renderer},containerSelector) {
    this._initialCards = cards;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  };

  render(){
  this._initialCards.forEach((item) => this._renderer(item));
  };

  addItem(element){
  this._container.append(element);
  };
};
