'use strict'

//Створення Массиву
function generateRandomArr(arrLength, minVal, maxVal) {
	const arr = []
	for (let i = 0; i < arrLength; i++) {
		const randomNum = minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
		arr.push(randomNum)
	}
	return arr
}
const arr = generateRandomArr(30, 3, 33)

function getInsertionSortCount(arr) {
	let counter = 0
	for (let i = 1; i < arr.length; i++) {
		const temp = arr[i]
		let j = i - 1
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j]
			counter++
			j--
		}
		arr[j + 1] = temp
	}
	return counter
}

console.log(`Массив було відсортовано за ${getInsertionSortCount(arr)} обмінів`)
console.log(arr)
