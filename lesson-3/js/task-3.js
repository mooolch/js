// Інтервал випадккового числа
const MIN_INTERVAL = 1;
const MAX_INTERVAL = 5;

// Геенеруємо випадкове число
let randomNumber = MIN_INTERVAL + Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL + 1));

//==========================================================================================================================
// Тут я не так прочитал условия задачи))) Я подумал, что пользователь вводит оба числа сразу и в случае неудачи игра начинается заново с новывыми вариантами и новым случайным числом )

/*

alert('Спробуйте вгадати ціле число в проміжку між 1 та 5 (включно). Ви маєте 2 спроби.');
let userNumberOption_1 = parseInt(prompt('Введіть ваш перший варіант числа', '1'));
let userNumberOption_2 = parseInt(prompt('Введіть ваш другий варіант числа', '3'));

// Перевіряємо, чи співпадає хоча б одне з введених чисел с "випдковим"?
if (userNumberOption_1 === randomNumber || userNumberOption_2 === randomNumber) {
	// Спроба № 1, якщо вгадаоли
	alert(`Вітаємо, ви вгадали з першої спроби! випадкове число було ${randomNumber}.`);
} else {
	// // Якщо не вгадали, то спроба № 2
	alert(`Нажаль ви не вгадали, випадкове число було ${randomNumber}, спробуйте ще раз`);

	// Запитуємо нові числа у користувача
	userNumberOption_1 = parseInt(prompt('Введіть ваш перший варіант числа', '5'));
	userNumberOption_2 = parseInt(prompt('Введіть ваш другий варіант числа', '4'));

	// Генеруємо нове випадкове число
	randomNumber = MIN_INTERVAL + Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL + 1));

	if (userNumberOption_1 === randomNumber || userNumberOption_2 === randomNumber) {
		// Спроба № 2, якщо вгадали
		alert(`Вітаємо, ви вгадали з другої спроби! випадкове число було ${randomNumber}.`);
    } else {
		// Спроба № 2, якщо не вгадали
		alert(`Упс, вам знову не пощастило. випадкове число було ${randomNumber}.`);
	}
}
 */

// Вариант 2, решение согласно условиям
alert('Спробуйте вгадати ціле число в проміжку між 1 та 5 (включно). Ви маєте 2 спроби.');
let userNumber = parseInt(prompt('Введіть ваш перший варіант числа', '1'));

if (userNumber === randomNumber) {
	alert(`Вітаємо, ви вгадали з першої спроби! випадкове число було ${randomNumber}.`);
} else {
	alert(`Нажаль ви не вгадали, але маєте ще одну спробу!`);
	userNumber = parseInt(prompt('Введіть ще раз ваш варіант числа', '3'));
	if (userNumber === randomNumber) {
		alert(`Вітаємо, ви вгадали! Випадкове число було ${randomNumber}.`);
	} else {
		alert(`Упс, вам знову не пощастило. Гра закінчена. Випадкове число було ${randomNumber}.`);
	}
}
