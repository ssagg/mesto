// import { Card } from './card.js'
export default class Section {
    constructor({cards, renderer},containerSelector) {
        this._initialCards = cards;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;

}


render(){
this._initialCards.forEach((item)=>   this._renderer(item)
// const card = new Card(item.name, item.link, '.card-template_type_default', openCard);
    // const cardElement = card.generateCard();
    // this._addItem(cardElement);
)
}
addItem(element){
   this._container.append(element);

}

}


// const createCard = (name, link) => {
//     const card = new Card(name, link, '.card-template_type_default', openCard);
//     const cardElement = card.generateCard();
//     return cardElement;
//   };

// initialCards.forEach((item) => {
//     container.append(createCard(item.name, item.link, '.card-template_type_default'));
//   });