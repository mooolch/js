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
const arr = getRandomArr(50, 150, 20)
console.log(arr)
//========================================================================================================================================================

const payedTax = arr.map((el) => el * 0.2)

/* 
const payedTax = []
for (const el of arr) payedTax.push(el * 0.2) 
*/

/* 
const payedTax = []
arr.forEach((el) => payedTax.push(el * 0.2))
*/
console.log(payedTax)
