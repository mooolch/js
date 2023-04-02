const randomNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1))

function MultChecker(num) {
	this.number = num
	this.correctAnswers = 0
	this.incorrectAnswers = 0
}

// Генерируем пример в виде массива
MultChecker.prototype.exampleGenerator = function () {
	const num = randomNum(2, 9)
	return {
		example: `${this.number} * ${num}`,
		answer: num * this.number,
	}
}

// Проверяем ответ
MultChecker.prototype.checkAnswer = function (userAnswer, { answer }) {
	if (userAnswer === answer) this.correctAnswers += 1
	else this.incorrectAnswers += 1
}

// Выдаем ответ
MultChecker.prototype.renderResult = function () {
	return `Правильних вiдповiдей ${this.correctAnswers} <br>
            Неправильних вiдповiдей ${this.incorrectAnswers}`
}

const test = new MultChecker(7)
console.log(test)

const example = test.exampleGenerator()
console.log(example)
test.checkAnswer(35, example)

const example2 = test.exampleGenerator()
test.checkAnswer(14, example2)
console.log(example2)

const example3 = test.exampleGenerator()
test.checkAnswer(49, example3)
console.log(example3)

console.log(test)

const el = (document.querySelector('.task__body').innerHTML = test.renderResult())
