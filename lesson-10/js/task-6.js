'use strict'

const names = [
	'Anna',
	'Ivan',
	'Maria',
	'Peter',
	'Elena',
	'Alexey',
	'Olga',
	'Dmitry',
	'Sophia',
	'Maxim',
	'Natalia',
	'Andrei',
	'Julia',
	'Sergei',
	'Tatiana',
	'Igor',
	'Ksenia',
	'Roman',
	'Victoria',
	'Yuri',
]
console.log(names)
// Ф-ція обміну єлементів
function swapEl(arr, el1, el2) {
	;[arr[el1], arr[el2]] = [arr[el2], arr[el1]]
}
//========================================================================================================================================================

/* 
//Сорируем массив
function cocktailSort(arr) {
	let start = 0
	let end = arr.length - 1

	while (start < end) {
		for (let i = start; i < end; i++) {
			if (arr[i].length > arr[i + 1].length) swapEl(arr, i, i + 1)
		}
		end--
		for (let i = end; i > start; i--) {
			if (arr[i].length < arr[i - 1].length) swapEl(arr, i, i - 1)
		}
		start++
	}
	return arr
}
*/

//Сорируем массив
function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		const currEl = arr[i]
		let j = i - 1
		while (j >= 0 && arr[j].length > currEl.length) {
			arr[j + 1] = arr[j]
			j--
		}
		arr[j + 1] = currEl
	}
	return arr
}

//Проверяем есть ли элемент c такой длинной и возвращаем его индекс
function findElementIdxByLength(arr, elLength) {
	let start = 0
	let end = arr.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (arr[middle].length === elLength) return middle
		if (arr[middle].length < elLength) start = middle + 1
		else end = middle - 1
	}
	return -1
}

const elIdx = findElementIdxByLength(names, 5)

function logMessage(elIdx) {
	const message =
		elIdx > 0
			? `Елемент з такою довжиною є в массиві під індексом ${elIdx}`
			: 'Елемент з такою довжиною в массиві відсутній'
	console.log(message)
	return message
}
logMessage(elIdx)
