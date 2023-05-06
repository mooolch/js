'use strict'

const randomNum = (minVal, maxVal) => minVal + Math.floor(Math.random() * (maxVal - minVal + 1))

function calcTester(quetsionsNum, minNum, maxNum, parentSelector) {
	const parent = document.querySelector('.task__body')
	for (let i = 1; i <= quetsionsNum; i++) {
		const num1 = randomNum(minNum, maxNum)
		const num2 = randomNum(minNum, maxNum)
		const res = num1 + num2

		const startSortingTime = new Date()
		const userAnswer = parseInt(prompt(`Скільки буде ${num1} + ${num2} ?`))
		const answerTime = (new Date() - startSortingTime) / 1000

		const isCorrect = res === userAnswer ? 'Коректна' : 'Помилкова'

		const el = document.createElement('div')
		el.innerText = `${i}) Швидкість відповіді - ${answerTime} с. Відповідь - ${isCorrect}`
		parent.append(el)
	}
}
setTimeout(() => {
	calcTester(5, 5, 20)
}, 2500)
