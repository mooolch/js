'use strict'

//1. Запрашиваем числа
const num1 = parseFloat(prompt('Введіть перше число', '333'))
const num2 = parseFloat(prompt('Введіть друге число', '-9.8'))
const num3 = parseFloat(prompt('Введіть третє число', '44'))

//2. Считаем результат
function calcResults() {
	let evenNumbers = 0
	let positiveNumbers = 0
	let moreThatAHundredNums = 0
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] % 2 === 0) evenNumbers++
		if (arguments[i] > 0) positiveNumbers++
		if (arguments[i] > 100) moreThatAHundredNums++
	}
	let result = `Кількість:\nПарних - ${evenNumbers}.\nПозитивних - ${positiveNumbers}.\nБільших за 100 - ${moreThatAHundredNums}.`
	return result
}

//3. Выводим результат
let message = calcResults(num1, num2, num3)
alert(message)
