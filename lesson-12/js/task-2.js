'use strict'

const date = {
	day: 15,
	month: 3,
	year: 2007,
}

function calcShiftedYear(months, date) {
	return Math.floor((months + date.month - 1) / 12) + date.year
}

console.log(`Сьогодні ${date.day}.${date.month}.${date.year}`)
console.log(`Через 9 місяців буде ${calcShiftedYear(9, date)} рік`)
console.log(`Через 10 місяців буде ${calcShiftedYear(10, date)} рік`)
