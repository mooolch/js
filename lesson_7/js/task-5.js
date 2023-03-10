'use strict'

//========================================================================================================================================================
function getRandomArr(minValue, maxValue, numberOfValues) {
	const arr = []
	for (let i = 0; i < numberOfValues; i++) {
		const randomNum = minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
		arr.push(randomNum)
	}
	return arr
}
const arr = getRandomArr(-100, 100, 20)
console.log(arr)
//========================================================================================================================================================

let sumOfPositiveNums = 0

for (const element of arr) if (element > 0) sumOfPositiveNums += element

console.log(sumOfPositiveNums)
