const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = (login) => {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = (allLogins, login) => {
  return !allLogins.includes(login);
};

const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }

  logins.push(login);
  return 'Логин успешно добавлен!';
};

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));
