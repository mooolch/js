'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const greaterThan1000PricesSum = pricesHistory.reduce(
	(elSum, element) => (element > 1000 ? (elSum += element) : elSum),
	0
)

console.log(greaterThan1000PricesSum)
