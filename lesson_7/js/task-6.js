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
let arr = getRandomArr(1, 100, 20)
console.log(arr)
//========================================================================================================================================================

arr = arr.map((element) => (element > arr[0] ? (element *= 2) : element))
/* 
arr.forEach((element, i, arrRef) => {
	if (element > arr[0]) arrRef[i] *= 2
})
*/

console.log(arr)
