const number = parseFloat(prompt('Введіть будь-яке дрібне число', '0'));

// Отримуємо цілу частину числа
const integerOfNumber = Math.trunc(number);

// Отримуємо дрібну частину у вигляді типу даних number
const fractionOfNumber = parseFloat((number - integerOfNumber).toFixed(10));

console.log(`Ваше число ${number}`);
console.log(`Ціла частина ${integerOfNumber}`);
console.log(`Дрібна частина ${fractionOfNumber}`);

