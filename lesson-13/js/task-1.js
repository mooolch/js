// Вспомогательная ф-ция
const randomNum = (maxVal) => Math.floor(Math.random() * (maxVal + 1))

// Конструктор
function ShootingRange(length) {
	this.range = new Array(length).fill(0)
}

// Cоздание мишеней
ShootingRange.prototype.createGame = function (numOfTargets) {
	let targets = numOfTargets
	const length = this.range.length - 1
	while (targets) {
		const idx = randomNum(length)
		if (this.range[idx] === 0) {
			this.range[idx] = 1
			targets--
		}
	}
	return this.range
}

// Выстрел
ShootingRange.prototype.shoot = function (shootPosition) {
	// подразумевается, что я буду получать уже корректные данные (тоесть -1 от числа пользователя, чтобы номер мишени совбадал с номером в массиве)
	if (this.range[shootPosition] === 1) {
		this.range[shootPosition] = 0
	}
	return this.range
}

// Вывод на экран
ShootingRange.prototype.printGameField = function () {
	let result = '<table><tr>'
	for (const el of this.range) {
		result += `<td>${el}</td>`
	}
	result += '</tr></table>'
	return result
}

const rangeGame = new ShootingRange(10)
rangeGame.createGame(5)
rangeGame.shoot(5)
const el = (document.querySelector('.task__body').innerHTML = rangeGame.printGameField())

//=========================================================================================
/* 
ShootingRange.prototype.shoot = function (numOfTargets) {
	let targets = numOfTargets
	while (targets) {
		const userShoot = parseInt(prompt(`Введiть номер клiтинки для пострiлу (1-${this.range.length})`))
		console.log(userShoot)
		// Если делать полноценную игру, даем возможность пользователю выйти
		if (isNaN(userShoot)) {
			alert('Гру закiнчено')
			break
		}
		if (this.range[userShoot - 1] === 1) {
			this.range[userShoot - 1] = 0
			targets--
			alert(`Влучив! залишилось ще ${targets} цiлей.`)
		} else alert('Промазав...')
	}
	// На всякий случай возвращаем остаток целей (могли бы использовать если содать полоценную игру)
	return targets
}
*/
