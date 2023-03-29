'use strict'

//========================================================================================================================================================

/* 
function numsIterator(minVal, maxVal) {
	let currentVal = minVal - 1
	function iterator() {
		if (currentVal === maxVal) currentVal = minVal
		else currentVal++
		return currentVal
	}
	return iterator
}
*/
/* 
function numsIterator(minVal, maxVal) {
	let currVal = minVal - 1
	return () => (currVal === maxVal ? (currVal = minVal) : ++currVal)
}
*/

// let num = numsIterator(1, 12)

// Нет смысла добавлять в эти варианты ф-ций переменную step, так как они могут некорректно работать
// при шаге 2 и более и выдавать значения выше максимального

//========================================================================================================================================================

function numsIterator(minVal, maxVal, step = 1) {
	let currVal = minVal - step
	return () => (currVal + step > maxVal ? (currVal = minVal) : (currVal += step))
}
let num = numsIterator(1, 12, 1)
// Эта ф-ция не пропустит значение больше максимального с любым шагом

console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
console.log(num())
