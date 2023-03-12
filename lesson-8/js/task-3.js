'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

const moreThanPreviousPrices = pricesHistory.filter((element, i, arrRef) => element > arrRef[i - 1])
//Этот способ лучший?

/* 
const moreThanPreviousPrices = []
pricesHistory.reduce((prevVal, el) => {
	if (el > prevVal) moreThanPreviousPrices.push(el)
	return el
})
*/

/* 
const moreThanPreviousPrices = pricesHistory.reduce((arr, element, i, arrRef) => {
	if (element > arrRef[i - 1]) arr.push(element)
	return arr
}, [])
*/

console.log(moreThanPreviousPrices)
