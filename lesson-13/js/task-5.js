const maleNames = ['Олександр', 'Михайло', 'Іван', 'Дмитро', 'Сергій']
const femaleNames = ['Анна', 'Катерина', 'Марія', 'Ольга', 'Тетяна']

function ChoreographerАssistant(maleNames, femaleNames) {
	this.maleNames = maleNames
	this.femaleNames = femaleNames
}

const dancers = new ChoreographerАssistant(maleNames, femaleNames)

// В задании было написано 2 отдельны метода для имен?
ChoreographerАssistant.prototype.randomMaleDancer = function () {
	const random = Math.floor(Math.random() * this.maleNames.length)
	return this.maleNames[random]
}

ChoreographerАssistant.prototype.randomFemaleDancer = function () {
	const random = Math.floor(Math.random() * this.femaleNames.length)
	return this.femaleNames[random]
}

// Вывод пары (не понятно куда выводить нужно, алерт для наглядности, или можно ретурнить для вывода на экран)
ChoreographerАssistant.prototype.randomPair = function () {
	alert(`Випадкова танцювальна пара: ${this.randomMaleDancer()} + ${this.randomFemaleDancer()}`)
}

// Вывод пары каждые 5 секунд
ChoreographerАssistant.prototype.run = function (delay) {
	setTimeout(() => {
		this.randomPair()
		this.run(delay)
	}, delay * 1000)
}

dancers.run(5)

// Подскажите как правильно сделать таймер, который будет повторять действие  строго через заданное кол-во секунд после реакции пользователя на какое-то действие (к примеру тут - нажатие на кнопку) ?
// вариант 1 - просто спамит алерты в очередь выполнения не дожидаясь реакции пользователя.
// вариант 2 -  работает, но есть подозрения что из-за рекурсии запускается куча контекстов выполнения, что займет кучу лишней памяти при большом кол-ве вызовов. Или я ошибаюсь и 2 вариант нормальный?

// function alert_msg_1(delay) {
// 	setInterval(() => alert('message'), delay * 1000)
// }

// function alert_msg_2(delay) {
// 	setTimeout(() => {
// 		alert('message')
// 		alert_msg_2(delay)
// 	}, delay * 1000)
// }

// alert_msg_1(3)
// alert_msg_2(3)
