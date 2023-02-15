const userLeter = prompt('Введіть одну будь-яку літеру англійського алфавіту у верхноьому регістрі', 'G');
const encodingCoef = parseInt(prompt('Введіть коефіцієнт зміщення', '2'));

// Получаем значение кода буквы в формате юникода
const userLeterCode = userLeter.charCodeAt(0);

// Добавляем коэффициент смещения букв
const userEncodedLeterCode = userLeterCode + encodingCoef;

// Получаем из значения в формате юникода закодированную бувку
const userEncodedLeter = String.fromCharCode(userEncodedLeterCode);

console.log(`Введена літера - ${userLeter}`);
console.log(`Літера після кодування - ${userEncodedLeter} (з коефіцієнт зміщення = ${encodingCoef} )`);
