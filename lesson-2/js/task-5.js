//Отримуємо значення в секундах
let seconds = parseFloat(prompt('Напишіть, скільки секунд тому назад ви прокинулись?', '0'));

//Проводимо розрахунки
let totalTimeInMinutes = seconds / 60;
let elapsedTimeInHours = Math.floor(totalTimeInMinutes / 60);
let elapsedTimeInMinutes = Math.floor(totalTimeInMinutes % 60);
let elapsedTimeInSeconds = seconds % 60;

//Виводимо результат
let el = document.querySelector('.task__body');
el.innerHTML = `
<p>
Ви прокинулись:
</p>
<p>
${elapsedTimeInHours} год. ${elapsedTimeInMinutes} хв. ${elapsedTimeInSeconds} с. тому назад.
</p>
`;
