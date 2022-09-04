let input;
const numbers = [];

while (input !== null) {
  input = prompt('Введите число');

  if (input !== null) {
    numbers.push(Number(input));
  }
}

if (numbers.length !== 0) {
  const total = numbers.reduce((total, element) => total + element, 0);

  console.log(`Общая сумма чисел равна [${total}]`);
}
