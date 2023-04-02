'use strict'

const obj1 = {
	numbers: [2, 4, 5, 21, 5, 54, 74, 14, 11, 33, 22, 45, 4, 53, 45, 3],
	calcSum: function () {
		return this.numbers.reduce((sum, el) => sum + el)
	},
}

const obj2 = {
	numbers: [2, 4, 5, 21, 5, 54, 74, 14, 11, 33, 22, 45, 4, 53, 45, 3],
	calcMultiplyInRange: function (minRange, maxRange) {
		return this.numbers.reduce((sum, el) => (el >= minRange && el <= maxRange ? sum * el : sum), 1)
	},
}

// Диапазон чисел в которомы мы производим вычисления
const range = [3, 15]

// Используем "родной метод"
const obj1_sum = obj1.calcSum()

// Заимствуем методы у другого объекта
const obj1_multyply = obj2.calcMultiplyInRange.call(obj1, 3, 15)
const obj1_multyply_2 = obj2.calcMultiplyInRange.apply(obj1, range)

//=========================================================================================

// Используем "родной метод"
const obj2_multiply = obj2.calcMultiplyInRange(3, 15)

// Заимствуем методы у другого объекта
const obj2_sum = obj1.calcSum.call(obj2)
const obj2_sum_2 = obj1.calcSum.apply(obj2)
