// const BASE_URL = 'https://auth.nomoreparties.co';

// export const register = (email, password) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({password, email})
//   })
//   .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
//   .catch(err => console.log(err));
// }

// export const authorize = () => {
//   return fetch(`${window.location.href}check-user-land`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//   .then(res => res.json())
//   .then(res => setIsAuth(res))
//   .catch(err => console.log(err));
// }