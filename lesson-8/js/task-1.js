'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const moreThanThousandPrices = pricesHistory.filter((el) => el > 1000)

// const moreThanThousandPrices = pricesHistory.reduce((arr, el) => {
// 	if (el > 1000) arr.push(el)
// 	return arr
// }, [])

console.log(moreThanThousandPrices)
