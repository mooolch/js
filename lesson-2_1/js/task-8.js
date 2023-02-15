const userCoins = parseInt(prompt('Введіть кількість монет номіналом 1 коп.', '99'));

const COINS_IN_UAH = 100;

// Вираховуємо цілу частину = грн
const uahQuantity = Math.trunc(userCoins / COINS_IN_UAH);

// Беремо залишок від ділення = коп
const coinsQuantity = userCoins % COINS_IN_UAH;

console.log(`Внесено: ${userCoins} монет номіналом 1 коп.`);
console.log(`Загалом  це: ${uahQuantity} грн. ${coinsQuantity} коп.`);
