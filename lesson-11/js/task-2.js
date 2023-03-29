'use strict'

function findSequenceNum2(i) {
	let x0 = 1
	let x1 = 1
	let xi
	for (let j = 2; j <= i; j++) {
		xi = x1 + 2 * x0
		x0 = x1
		x1 = xi
	}
	return xi
}

console.log(findSequenceNum2(10))
// То же самое, как и с первым заданием :(
// Пару раз пересмотрю урок и попробую перерешать эти задания позже