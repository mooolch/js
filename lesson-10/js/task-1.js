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

// Ф-ція обміну єлементів
function swapEl(arr, el1, el2) {
	;[arr[el1], arr[el2]] = [arr[el2], arr[el1]]
}

// Сортування
function getBubbleSortCount(arr) {
	let changed
	let counter = 0
	do {
		changed = false
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				swapEl(arr, i, i - 1)
				counter++
				changed = true
			}
		}
	} while (changed)
	return counter
}

console.log(`Массив було відсортовано за ${getBubbleSortCount(arr)} обмінів`)
console.log(arr)
