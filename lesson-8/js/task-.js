'use strict'

function getRandomArr(minVal, maxVal, valQuantity) {
	const arr = []
	for (let i = 0; i < valQuantity; i++) {
		const randomNum = minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
		arr.push(randomNum)
	}
	return arr
}
const pricesHistory = getRandomArr(1, 10000, 10)

// const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
// console.log(`pricesHistory - ${pricesHistory}`)
