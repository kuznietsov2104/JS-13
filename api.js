// // 1) Отримання елементів

// const API_URL = "https://6afc1b46892984c4494ad847.mockapi.io/api/01/users";


// async function getUsers() {
//   try {
//     const response = await fetch(API_URL);

//     if (!response.ok) {
//       throw new Error("Помилка отримання даних");
//     }

//     const data = await response.json();

//     console.log(data);

//     return data;
//   } catch (error){
//     console.error(error);
//   }
// };

// getUsers();

// // 2) Додавання елемента

// async function createUser(user) {
//   try {
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     });

//     if (!response.ok) {
//       throw new Error('Ошибка создания пользователя');
//     }

//     const data = await response.json();

//     console.log(data);

//     return data;

//   } catch (error) {
//     console.error(error);
//   }
// };

// createUser({
//   name: "Bob",
//   email: "123@gmail.com",
//   pririty: 1,
//   activated: false
// });

// // 3) Видалення елемента по айді

// async function deleteUser(id) {
//   try {
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: 'DELETE'
//     });

//     if (!response.ok) {
//       throw new Error('Помилка видалення користувача');
//     }

//     console.log('Користувач видален');

//   } catch (error) {
//     console.error(error);
//   }
// };

// deleteUser(3);