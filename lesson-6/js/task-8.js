'use strict'

function playGame() {
	// Создаем массив с призами
	const numberOfPrizes = parseInt(prompt('Введіть кількість призів що потрібно сгенерувати', '25'))
	const prizes = []
	for (let i = 0; i < numberOfPrizes; i++) {
		const randomNum = -500 + Math.floor(Math.random() * (500 - -500 + 1))
		prizes.push(randomNum)
	}
	console.log(prizes)
	//Игра
	let userPrizesSum = 0
	let userChoise
	do {
		userChoise = parseInt(prompt(`Введіть номер від 1 до ${numberOfPrizes} щоб отримати приз`, '3'))
		if (!isNaN(userChoise)) {
			getUsersPrize(userChoise, prizes)
			alert(`Зараз сума вашого виграшу складає ${userPrizesSum} балів.`)
		}
	} while (!isNaN(userChoise))

	//Вывод результата и получение приза
	function getUsersPrize(userChoise, prizes) {
		return (userPrizesSum += prizes[userChoise - 1])
	}
	let el = (document.querySelector(
		'.task__body'
	).innerHTML = `<p>Ваша загальна сума виграшу складає ${userPrizesSum} балів.</p>`)
}

playGame()
