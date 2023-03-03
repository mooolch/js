'use strict'

//1. Запрашиваем числа
const num1 = parseFloat(prompt('Введіть перше число', '3'))
const num2 = parseFloat(prompt('Введіть друге число', '9'))
const num3 = parseFloat(prompt('Введіть третє число', '4.8'))
const num4 = parseFloat(prompt('Введіть четверте число', '-11'))

//7. Выводим результат
showMessage(num1, num2, num3, num4)

//2. Считаем сумму 
function calcSum(a, b, c, d) {
	return a + b + c + d
}

//3. Считаем произведение
function calcMultiply(a, b, c, d) {
	return a * b * c * d
}

//4. Считаем среднее арифметическое
function calcAverage(a, b, c, d) {
	return (a + b + c + d) / 4
}

//5. Находим мин. значение
function findMin(a, b, c, d) {
	let min1 = a < b ? a : b
	let min2 = c < d ? c : d
	let min = min1 < min2 ? min1 : min2
	return min
}

//6. Формируем сообщение
//Есть вопрос по поводу правильности такого подхода к выводу сообщения... или так тоже можно? чтобы сократить код и более удобно вызовом одной ф-ции посчитать сразу все 4 операции + вывод результата.
function showMessage(a, b, c, d) {
	let sum = calcSum(a, b, c, d)
	let multiply = calcMultiply(a, b, c, d)
	let average = calcAverage(a, b, c, d)
	let min = findMin(a, b, c, d)
	alert(
		`Сума введених чисел = ${sum}\nДобуток введених чисел = ${multiply}\nСереднє арифметичне з введених чисел = ${average}\nНайменьше з введених чисел = ${min}`
	)
}
