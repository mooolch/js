'use strict'

//Створення Массиву
/* 
function generateRandomArr(arrLength, minVal, maxVal) {
	const arr = []
	for (let i = 0; i < arrLength; i++) {
		const randomNum = minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
		arr.push(randomNum)
	}
	return arr
}
const arr = generateRandomArr(5, 3, 33)
*/
const arr = [3, 5, 1, 4, 2]
const arr2 = [3, 5, 1, 4, 2]
const arr3 = [3, 5, 1, 4, 2]

// Ф-ція обміну єлементів
function swapEl(arr, el1, el2) {
	;[arr[el1], arr[el2]] = [arr[el2], arr[el1]]
}
//========================================================================================================================================================

// 1
function printBubbleSort(arr) {
	let mesaage = `<div><h2>Bubble Sort</h2>`
	let changed
	do {
		changed = false
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				swapEl(arr, i, i - 1)
				changed = true
				mesaage += `<p>[ ${arr} ]</p>`
			}
		}
	} while (changed)
	mesaage += `</div>`
	return mesaage
}

//2
function printCocktailSort(arr) {
	let startIdx = 0
	let endIdx = arr.length - 1
	let mesaage = `<div><h2>Cocktail Sort</h2>`
	while (startIdx < endIdx) {
		for (let i = startIdx; i < endIdx; i++) {
			if (arr[i] > arr[i + 1]) {
				swapEl(arr, i, i + 1)
				mesaage += `<p>[ ${arr} ]</p>`
			}
		}
		endIdx--
		for (let i = endIdx; i > startIdx; i--) {
			if (arr[i] < arr[i - 1]) {
				swapEl(arr, i, i - 1)
				mesaage += `<p>[ ${arr} ]</p>`
			}
		}
		startIdx++
	}
	mesaage += `</div>`
	return mesaage
}

//3
function printInsertionSort(arr) {
	let mesaage = `<div><h2>Insertion Sort</h2>`
	for (let i = 1; i < arr.length; i++) {
		const temp = arr[i]
		let j = i - 1
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j]
			mesaage += `<p>[ ${arr} ]</p>`
			j--
		}
		arr[j + 1] = temp
		mesaage += `<p>[ ${arr} ]</p>`
	}
	mesaage += `</div>`
	return mesaage
}

const el = (document.querySelector('.task__body').innerHTML = `
${printBubbleSort(arr)}
${printCocktailSort(arr2)}
${printInsertionSort(arr3)}
`)
