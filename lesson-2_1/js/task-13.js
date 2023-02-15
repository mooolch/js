const monthsQuantity = parseInt(prompt('Введіть кількість місяців', '9'));

const MONTHS_IN_A_YEAR = 12;

const totalYearsNumber = Math.floor(monthsQuantity / MONTHS_IN_A_YEAR);
const totalMOnthsNumber = monthsQuantity % MONTHS_IN_A_YEAR;

console.log(`${monthsQuantity} місяців це - ${totalYearsNumber}р. та ${totalMOnthsNumber} міс.`);
