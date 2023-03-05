'use strict'

const battlefieldLength = parseInt(prompt('Введіть довжину ігрового поля', '15'))
const shipsAmount = parseInt(prompt('Введіть кількість кораблів', '7'))

function createSeaBattleGame(battlefieldLength, shipsAmount) {
	function createBattlefield(battlefieldLength, shipsAmount) {
		const battlefield = []
		//Создаем игровое поле указанной  длинны и заполняем его нулями
		for (let i = 0; i < battlefieldLength; i++) {
			battlefield.push(0)
		}

		//В случайном порядке расставляем корабли
		for (let i = 0; i < shipsAmount; i++) {
			const randomNum = Math.floor(Math.random() * battlefieldLength)
			if (battlefield[randomNum] !== 1) battlefield[randomNum] = 1
			else i--
		}
		return battlefield
	}

	let battlefield = createBattlefield(battlefieldLength, shipsAmount)
	playGame(battlefield)

	//Игра
	function playGame(battlefield) {
		let shipsAlive = shipsAmount
		let userShoot
		do {
			userShoot = parseInt(prompt(`Введіть номер від 1 до ${battlefieldLength} для пострілу`, ''))
			if (battlefield[userShoot - 1] === 1) {
				shipsAlive--
				battlefield[userShoot - 1] = 0 //Чтобы нельзя было читерить и повторно стрелять в одну точку "топим корабль"
				alert(`Коробель потоплено, злишилось ${shipsAlive} кораблів.`)
				//Доп проверка если юзер захочет выйти из игры
			} else if (isNaN(userShoot)) alert('Ви не схотіли стріляти. Гру закінчено')
			else alert('Промазав')
			//Доп проверка если юзер захочет выйти из игры
		} while (shipsAlive !== 0 && !isNaN(userShoot))
		//Доп проверка чтобы не вывыодить сообщение, если юзер захочет выйти из игры
		if (!isNaN(userShoot)) alert('Всі кораблі потоплено! Гру закінчено.')
	}
}

createSeaBattleGame(battlefieldLength, shipsAmount)
