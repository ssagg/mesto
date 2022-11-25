

const createCard = (name, link) => {
    const card = new Card(name, link, '.card-template_type_default', openCard);
    const cardElement = card.generateCard();
    return cardElement;
  };

  initialCards.forEach((item) => {
    container.append(createCard(item.name, item.link, '.card-template_type_default'));
  });