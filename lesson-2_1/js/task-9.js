const IntervalInMinutes = parseInt(prompt('Введіть потрібний проміжок часу в хвилинах', '2'));
const IntervalInSeconds = parseInt(prompt('Введіть потрібний проміжок часу в секундах', '5'));

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

// Получаем текущее время
const nowDate = new Date();
const nowHours = nowDate.getHours();
const nowMinutes = nowDate.getMinutes();
const nowSeconds = nowDate.getSeconds();

// Переводим все значения времени в секунды
const totalTimeInSeconds =
	nowHours * SECONDS_IN_HOUR + (nowMinutes + IntervalInMinutes) * SECONDS_IN_MINUTE + nowSeconds + IntervalInSeconds;

// Получаем время в часах
const hoursWithInterval = Math.floor(totalTimeInSeconds / SECONDS_IN_HOUR);

//Из общего времени вычитаем часы и получаем остаток в минутах
const minutesWithInterval = Math.floor((totalTimeInSeconds - hoursWithInterval * SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);

// Получаем остаток секунд
const secondsWithInterval = totalTimeInSeconds % SECONDS_IN_MINUTE;

console.log(`Поточний час: ${nowDate}.`);
console.log(`Додаємо до нього ${IntervalInMinutes} хв. та ${IntervalInSeconds} с.`);
console.log(`Новий час: ${minutesWithInterval} хв. та ${secondsWithInterval} с.`);
