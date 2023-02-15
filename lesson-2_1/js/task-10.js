const coinsValue_2 = parseInt(prompt('Введіть кількість монет номіналом 2 коп.', '1'));
const coinsValue_5 = parseInt(prompt('Введіть кількість монет номіналом 5 коп.', '2'));
const coinsValue_25 = parseInt(prompt('Введіть кількість монет номіналом 25 коп.', '3'));
const coinsValue_50 = parseInt(prompt('Введіть кількість монет номіналом 50 коп.', '4'));

const COINS_IN_UAH = 100;

// Визначаємо загальну кістькість монет в номіналі 1коп.
const totalCoinsQuantity = coinsValue_2 * 2 + coinsValue_5 * 5 + coinsValue_25 * 25 + coinsValue_50 * 50;

// Вираховуємо цілу частину = грн
const totalUahValue = Math.trunc(totalCoinsQuantity / COINS_IN_UAH);

// Беремо залишок від ділення = коп
const totalCoinsValue = totalCoinsQuantity % COINS_IN_UAH;

console.log(
	`Внесено монет: номіналом 2 коп. ${coinsValue_2} шт., номіналом 5 коп. ${coinsValue_5} шт., номіналом 25 коп. ${coinsValue_25} шт., та номіналом 50 коп. ${coinsValue_50} шт.`
);
console.log(`Загальна сума: ${totalUahValue} грн. ${totalCoinsValue} коп.`);
