'use strict'

function findSequenceNum(i) {
	if (i === 0) return 1
	else {
		let x_i = findSequenceNum(i - 1)
		return x_i + 2 * i
	}
}
console.log(findSequenceNum(10))

function findSequenceNum2(i) {
	let x_i = i + 1
	for (let j = 1; j <= i; j++) {
		x_i = x_i - i + 2 * i
	}
	return x_i
}
console.log(findSequenceNum2(10))

// Задание очень непонятное для меня оказалось, сидел не один час над этим и так и не нашел самостоятельное решение, пришлось "списывать"  :(