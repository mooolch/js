const monthsQuantity = parseInt(prompt('Введіть кількість місяців', '9'));

const nowDate = new Date();
const nowMonth = nowDate.getMonth();

const MONTHS_IN_A_YEAR = 12;

const totalMOnthsNumber = (monthsQuantity % MONTHS_IN_A_YEAR) + nowMonth;

console.log(`Зараз ${nowMonth} місяць року, через ${monthsQuantity} місяців буде - ${totalMOnthsNumber} місяць.`);
