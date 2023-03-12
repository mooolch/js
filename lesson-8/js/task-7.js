'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const isAllPricesHigherThan1000 = pricesHistory.every((el) => el > 1000)

console.log(isAllPricesHigherThan1000)
