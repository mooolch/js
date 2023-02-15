// //Отримуємо значення в секундах
// let seconds = parseFloat(prompt('Напишіть, скільки секунд тому назад ви прокинулись?', '0'));

// //Проводимо розрахунки
// let totalTimeInMinutes = seconds / 60;
// let elapsedTimeInHours = Math.floor(totalTimeInMinutes / 60);
// let elapsedTimeInMinutes = Math.floor(totalTimeInMinutes % 60);
// let elapsedTimeInSeconds = seconds % 60;

// //Виводимо результат
// let el = document.querySelector('.task__body');
// el.innerHTML = `
// <p>
// Ви прокинулись:
// </p>
// <p>
// ${elapsedTimeInHours} год. ${elapsedTimeInMinutes} хв. ${elapsedTimeInSeconds} с. тому назад.
// </p>
// `;

//========================================================================================================================================================

// Оголомуємо загальновідомі константи
const SECONDS_IN_A_HOUR = 3600;
const SECONDS_IN_A_MINUTE = 60;

// Отримуємо час від початку дня на момент завантаження сторінки
const nowDate = new Date();
const nowHours = nowDate.getHours();
const nowMinutes = nowDate.getMinutes();
const nowSeconds = nowDate.getSeconds();

//Проводимо розрахунки
const secondsFromDayStart = nowHours * SECONDS_IN_A_HOUR + nowMinutes * SECONDS_IN_A_MINUTE + nowSeconds;

const elapsedTimeInHours = Math.floor(secondsFromDayStart / SECONDS_IN_A_HOUR);
const elapsedTimeInMinutes = Math.floor((secondsFromDayStart % SECONDS_IN_A_HOUR) / SECONDS_IN_A_MINUTE);
const elapsedTimeInSeconds = secondsFromDayStart % SECONDS_IN_A_MINUTE;

//Виводимо результат
let el = document.querySelector('.task__body');
el.innerHTML = `
<p>
Від початку сьогодняшнього дня пройшло:
</p>
<p>
${secondsFromDayStart} секунд, це дорівнює: 
</p>
<p>
${elapsedTimeInHours} год. ${elapsedTimeInMinutes} хв. ${elapsedTimeInSeconds} с.
</p>
`;