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
let arr = getRandomArr(800, 1100, 20)
console.log(arr)
//========================================================================================================================================================

// arr = arr.map((element) => (element > 1000 ? (element *= 0.7) : element))

/* 
arr.forEach((element, i, arrRef) => {
	if (element > 1000) arrRef[i] *= 0.7
})
*/

console.log(arr)
