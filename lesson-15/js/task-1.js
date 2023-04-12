'use strict'

const testArr = [-2, -4, 5, 5, 4, 423 - 34, -343, 11, -3, 5, 3, 5]

class Test {
	constructor() {
		// поля не создавал, потому как вроде по условиях они не нужны?
		// следовательно toString тоже нет смысла создавать.
	}
	static getPositiveNumbersCount(array) {
		return array.reduce((counter, el) => (el > 0 ? counter + 1 : counter), 0)
	}
	static getNegativeNumbersCount(array) {
		return array.reduce((counter, el) => (el < 0 ? counter + 1 : counter), 0)
	}
	static getNumberOfMatches(array, targetNumber) {
		return array.reduce((counter, el) => (el === targetNumber ? counter + 1 : counter), 0)
	}
	static pos(array) {
		let counter = 0
		for (let i = 0; i < array.length; i++) {
			if (array[i] > 0) counter++
		}
		return counter
	}
}
console.log(Test.pos(testArr))

console.log(testArr)
console.log(`Positive numbers quantity - ${Test.getPositiveNumbersCount(testArr)}`)
console.log(`Negative numbers quantity - ${Test.getNegativeNumbersCount(testArr)}`)
console.log(`Number of matches (number 5) - ${Test.getNumberOfMatches(testArr, 5)}`)

