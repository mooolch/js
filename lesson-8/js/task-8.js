'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const pricesHigherThan1000Num = pricesHistory.reduce((counter, el) => (el > 1000 ? counter + 1 : counter), 0)

console.log(pricesHigherThan1000Num)

