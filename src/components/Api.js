export default class Api {
  constructor(options) {
    // тело конструктора
  }
  getUserInfo() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-55/users/me", {
      headers: {
        authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return result;
      });
  }
  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-55/cards", {
      headers: {
        authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return result;
      });

    // return fetch("https://mesto.nomoreparties.co/v1/cohort-55/cards", {
    //   headers: {
    //     authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
    //   },
    // }).then((res) => {
    //   if (res.ok) {
    //     console.log(res.json());
    //     return res.json();
    //   }

    //   // если ошибка, отклоняем промис
    //   return Promise.reject(`Ошибка: ${res.status}`);
    // });

    // другие методы работы с API
  }
}
// const api = new Api({
//   baseUrl: "https://mesto.nomoreparties.co/v1/cohort-55",
//   headers: {
//     authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
//     "Content-Type": "application/json",
//   },
// });

// api.getInitialCards();
