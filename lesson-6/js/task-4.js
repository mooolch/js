'use strict'

console.log('A434', 'd89243', 'd89243A', 'A89243', 'Ad89243A', '89243', 'Ad89243A')

//Находим кол-во номеров с ключевой буквой в начале
function countCarNmbers(keyLeter, ...carNumbers) {
	let carNumbersStartsWith_A = 0
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].charAt(0) === keyLeter) carNumbersStartsWith_A++
	}
	return carNumbersStartsWith_A
}
const keyLeter = 'A'
console.log(countCarNmbers(keyLeter, 'A434', 'd89243', 'd89243A', 'A89243', 'Ad89243A', '89243', 'Ad89243A'))

//Находим кол-во номеров с одинаковыми ключевыми буквами в начале и конце
function countMirrorCarNumbers(keyLeters, ...carNumbers) {
	let mirrorCarNumbers = 0
	for (let i = 0; i < carNumbers.length; i++) {
		let end = carNumbers[i].length - 1 // для лучшей читабельности вывел в отдельную переменную
		let lastLetter = carNumbers[i].charAt(end)
		let firstLetter = carNumbers[i].charAt(0)
		if (firstLetter === lastLetter && firstLetter === keyLeters) mirrorCarNumbers++
	}
	return mirrorCarNumbers
}
const keyLeters = 'A'
console.log(countMirrorCarNumbers(keyLeters, 'A434', 'd89243', 'd89243A', 'A89243', 'Ad89243A', '89243', 'Ad89243A'))

//Находим кол-во номеров которые длиннее указанного параметра
function coutnLongCarNumbers(carNumberLength, ...carNumbers) {
	let longNumbersCount = 0
	for (let i = 0; i < carNumbers.length; i++) {
		if (carNumbers[i].length > carNumberLength) longNumbersCount++
	}
	return longNumbersCount
}
const carNumberLength = 5
console.log(
	coutnLongCarNumbers(carNumberLength, 'A434', 'd89243', 'd89243A', 'A89243', 'Ad89243A', '89243', 'Ad89243A')
)
