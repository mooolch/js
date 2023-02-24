const minInterval = parseInt(
	prompt(
		"Гра.\nКомп'ютер спробує вгадати ваше число за 3 спроби. Числовий проміжок ви задаєте власноруч (Рекомендовано від 1 до 10).\nВведіть початок проміжку",
		'1'
	)
)
const maxInterval = parseInt(prompt('Введіть кінець числового проміжку', '10'))
const usersNumber = parseInt(prompt(`Введіть будь-яке ціле число від ${minInterval} до ${maxInterval}`))

let randomNum
let attempts = 1

do {
	randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
	if (randomNum !== usersNumber) alert(`Спроба ${attempts}. Комп'ютер називав число. - ${randomNum}. Не вгадав. ¬_¬`)
	else alert(`Спроба ${attempts}. Комп'ютер називав число. - ${randomNum}. Це правда!. (~￣▽￣)~`)
	attempts++
} while (attempts <= 3 && randomNum !== usersNumber)

if (randomNum === usersNumber) alert("Комп'ютер переміг. (~￣▽￣)~")
else alert("Спроби вичерпано. Комп'ютер програв. /(ò.ó)┛彡┻━┻")


//========================================================================================================================================================
// Если пользователь загадывает число в уме
//========================================================================================================================================================
// Варiант 2
/* 
let guessed = false
randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
for (; attempts <= 3 && guessed === false; attempts++) {
	guessed = confirm(`Спроба ${attempts}. Ваше число було ${randomNum}?`)
	if (guessed === true) break
	alert('(ಠ ∩ಠ)')
	randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
}
if (guessed === true) alert("Ураа! ヘ(^_^ヘ)\n Комп'ютер виграв.")
else alert("Спроби вичерпано. Комп'ютер програв. /(ò.ó)┛彡┻━┻")
*/