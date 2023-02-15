const daysQuantity = parseInt(prompt('Введіть кількість днів', '7'));

const DAYS_IN_A_WEEK = 7;

// Вираховуємо кількість повних тижнів
const wholeWeeksNumber = Math.floor(daysQuantity / DAYS_IN_A_WEEK);

console.log(`У ${daysQuantity} днях - ${wholeWeeksNumber} повних тижнів.`);
