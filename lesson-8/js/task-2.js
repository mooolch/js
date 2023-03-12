'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const moreThanThousandIndexes = pricesHistory.reduce((arr, element, index) => {
	if (element > 1000) arr.push(index)
	return arr
}, [])

console.log(moreThanThousandIndexes)
