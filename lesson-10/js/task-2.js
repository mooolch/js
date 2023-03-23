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
function getCocktailSortCount(arr) {
	let counter = 0
	let startIdx = 0
	let endIdx = arr.length - 1
	while (startIdx < endIdx) {
		for (let i = startIdx; i < endIdx; i++) {
			if (arr[i] > arr[i + 1]) {
				swapEl(arr, i, i + 1)
				counter++
			}
		}
		endIdx--

		for (let i = endIdx; i > startIdx; i--) {
			if (arr[i] < arr[i - 1]) {
				swapEl(arr, i, i - 1)
				counter++
			}
		}
		startIdx++
	}
	return counter
}

console.log(`Массив було відсортовано за ${getCocktailSortCount(arr)} обмінів`)
console.log(arr)
