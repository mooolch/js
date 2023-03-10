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
const arr = getRandomArr(1, 150, 20)
console.log(arr)
//========================================================================================================================================================

for (const element of arr) if (element > 100) console.log(element)
