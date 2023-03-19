'use strict'

const battlefield = []
let shipsAliveNumber = 5

//Создаем игровое поле где 0 пустое место
for (let i = 0; i < 6; i++) {
	const row = new Array(6).fill(0)
	battlefield.push(row)
}

function getRandomNum(minVal, maxVal) {
	return minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
}

//Заполняем поле кораблями - 1 = корабль, 0 = пусто
for (let i = 0; i < 5; i++) {
	const randomRow = getRandomNum(0, 5)
	const randomCol = getRandomNum(0, 5)
	if (battlefield[randomRow][randomCol] !== 1) battlefield[randomRow][randomCol] = 1
	else i--
}

//Игра
do {
	const userShootRow = parseInt(prompt('Введіть номер рядку для пострілу (від 1 до 6)', '3'))
	const userShootCol = parseInt(prompt('Введіть номер стовбцю для пострілу (від 1 до 6)', '3'))
	if (battlefield[userShootRow - 1][userShootCol - 1] === 1) {
		battlefield[userShootRow - 1][userShootCol - 1] = 0
		shipsAliveNumber--
		alert(`Влучив! Залишилось ${shipsAliveNumber} кораблів.`)
	} else {
		alert('Промазав')
	}
} while (shipsAliveNumber > 0)

alert('Всі кораблі потоплено! Ти переміг.')
console.log(battlefield)
