'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 70992, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const lastPriceGreaterThan1000 = pricesHistory.findLast((el) => el > 1000)

console.log(lastPriceGreaterThan1000)
