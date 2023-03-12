'use strict'

const pricesHistory = [3798, 7122, 237, 5625, 663, 7099, 337, 3839, 571, 7509]
console.log(`pricesHistory - ${pricesHistory}`)

//Чтобы не высчитывать заново каждый раз мах значение выводим его в отдельную константу
const maxValue = Math.max(...pricesHistory)

const percentOfMaxVale = pricesHistory.map((element) => (element / maxValue) * 100)

/* 
const percentOfMaxVale = pricesHistory.reduce((arr, element) => {
	arr.push((element / maxValue) * 100)
	return arr
}, [])
 */

console.log(percentOfMaxVale)
