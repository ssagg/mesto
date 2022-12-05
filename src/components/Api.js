export default class Api {
  constructor(options) {
    // тело конструктора
  }

  //получить данные пользователя (GET)
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
  //заменить данные пользователя (PATCH)
  sendUserInfo({ name, about }) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-55/users/me", {
      method: "PATCH",
      headers: {
        authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, about: about }),
    })
      .then((res) => {
        if (res.ok) {
          // console.log(res.json());
          return res.json();
        } else {
          Promise.reject("Error happened");
        }
      })
      .then((result) => {
        return result;
      });
  }
  //заменить аватар (PATCH)
  sendAvatar({ avatar }) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-55/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: avatar }),
      }
    )
      .then((res) => {
        if (res.ok) {
          // console.log(res.json());
          return res.json();
        } else {
          Promise.reject("Error happened");
        }
      })
      .then((result) => {
        return result;
      });
  }
  //получить список всех карточек в виде массива (GET)
  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-55/cards", {
      headers: {
        authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
  }
  //добавить карточку (POST)
  addNewCard({ name, link }) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-55/cards", {
      method: "POST",
      headers: {
        authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        Promise.reject("Error happened");
      }
      //   res.json())
      // .then((result) => {
      //   console.log(result);
      //   return result;
    });
  }
  //удалить карточку (DELETE)
  deleteCard(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards${id}`, {
      method: "DELETE",
      headers: {
        authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({id}),
    }).then((res) => {
      if (res.ok) {
        console.log(res.json());
        return res.json();
      } else {
        Promise.reject("Error happened");
      }
    });
  }

  // “залайкать” карточку (PUT)
  setLike(id) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-55/cards/likes/cards${id}`,
      {
        method: "PUT",
        headers: {
          authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({id}),
      }
    ).then((res) => {
      if (res.ok) {
        console.log(res.json());
        return res.json();
      } else {
        Promise.reject("Error happened");
      }
    });
  }

  // удалить лайк карточки (DELETE)
  // deleteLike(id) {
  //   return fetch(`https://mesto.nomoreparties.co/v1/cohort-55/cards/likes/cards${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
  //       "Content-Type": "application/json",
  //     },
  //     // body: JSON.stringify({id}),
  //   }).then((res) => {
  //     if (res.ok) {
  //       console.log(res.json());
  //       return res.json();
  //     } else {
  //       Promise.reject("Error happened");
  //     }
  //   });
  // }
}
// const api = new Api({
//   baseUrl: "https://mesto.nomoreparties.co/v1/cohort-55",
//   headers: {
//     authorization: "122ed227-619a-45d1-b0b1-3d475c480eb1",
//     "Content-Type": "application/json",
//   },
// });

// api.getInitialCards();
