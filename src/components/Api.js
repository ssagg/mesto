class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject("Error happened");
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  sendUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: name, about: about }),
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  sendAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatar }),
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  setLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._getResponse)
      .catch((error) => {
        console.log(error);
      });
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-55",
  headers: {
    authorization: "2154c702-3347-4f5c-863f-98444ff2fadb",
    "Content-Type": "application/json",
  },
});
