const minInterval = parseInt(
	prompt(
		"Комп'ютер спробує вгадати ваше число. Числовий проміжок ви задаєте власноруч (К-сть спроб у комп'ютера необмежена).\nВведіть початок проміжку",
		'1'
	)
)
const maxInterval = parseInt(prompt('Введіть кінець числового проміжку', '10'))
const usersNumber = parseInt(prompt(`Введіть будь-яке ціле число від ${minInterval} до ${maxInterval}`))

let randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
let guessed

while (randomNum !== usersNumber) {
	guessed = confirm(`Ваше число було ${randomNum}?`)
	if (guessed === true) {
		randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
		alert('Не бреши (ಠ ∩ಠ)')
	} else {
		randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
	}
}
guessed = confirm(`Ваше число було ${randomNum}?`)
if (guessed !== true) {
	alert(`Не бреши (ಠ ∩ಠ)\nЯ ж знаю що так)) Комп'ютер виграв. Ваше число було ${usersNumber}`)
} else {
	alert(`Ураа! ヘ(^_^ヘ)\n Комп'ютер виграв. Ваше число було ${usersNumber}`)
}

//========================================================================================================================================================
// Если пользователь загадывает число в уме
//========================================================================================================================================================
// Варiант 2
/* 
while (guessed !== true) {
	guessed = confirm(`Ваше число було ${randomNum}?`)
	if (guessed === true) break
	alert('(ಠ ∩ಠ)')
	randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
}
if (guessed === true) alert("Ураа! ヘ(^_^ヘ)\n Комп'ютер виграв.")
 */
//========================================================================================================================================================
// Варiант 3
/* 
for (; guessed !== true; ) {
	guessed = confirm(`Ваше число було ${randomNum}?`)
	if (guessed === true) break
	alert('(ಠ ∩ಠ)')
	randomNum = minInterval + Math.floor(Math.random() * maxInterval - minInterval + 1)
}
if (guessed === true) alert("Ураа! ヘ(^_^ヘ)\n Комп'ютер виграв.")
*/
