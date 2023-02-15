const year = parseInt(prompt('Введіть номер будь-якого року', '1888'));

// Визначаємо до якого сторічча належить рік
const centryOfYear = Math.trunc((year - 1) / 100 + 1);

console.log(`Ви ввели ${year} рік - це ${centryOfYear} сторічча`);