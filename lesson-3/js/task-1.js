// Отримуємо необхідні дані
const firstChildName = prompt('Як тебе звуть?', 'Ігор');
const firstChildCandiesNum = parseInt(prompt('Скільки ти маєш цукерок?', '3'));
const secondChildName = prompt('А як звуть твого друга ?', 'Віка');
const secondChildCandiesNum = parseInt(prompt('Скільки він/вона має цукерок?', '3'));

//Місце виводу результату
let el = document.querySelector('.task__body');

if (firstChildCandiesNum > secondChildCandiesNum) {
	// Якщо перша дитина має більше цукерок
	el.innerHTML = `
    <p>
        ${firstChildName} має більше цурекок.
    </p>`;
} else if (firstChildCandiesNum < secondChildCandiesNum) {
	// Якщо друга дитина має більше цукерок
	el.innerHTML = `
    <p>
        ${secondChildName} має більше цурекок.
    </p>`;
} else {
	// Якщо цукерок однакова к-ть
	el.innerHTML = `
    <p>
        Цукерок у обох дітей порівну.
    </p>`;
}
