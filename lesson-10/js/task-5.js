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

/*
console.log(names.indexOf('Olga')) // Получаем индекс нужного элемента без сортировки
console.log(names.findIndex(el => el === 'Olga')) // Получаем индекс нужного элемента без сортировки

names.sort((el1, el2) => {
	if (el1 < el2) return -1
	if (el1 > el2) return 1
	return 0
})
*/

//Сорируем массив
function bubbleSort(arr) {
	let changed
	do {
		changed = false
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				;[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
				changed = true
			}
		}
	} while (changed)
	return arr
}
bubbleSort(names)
console.log(names)
//Ф-ция проверки наличия элемента в массиве. На всякий случай, но по логике индекс элемента дает ответ на вопрос есть ли он в массиве и отдельная ф-ция не нужна (вместо стандартной Includes()).
function isArrIncludesElement(arr, element) {
	let start = 0
	let end = arr.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (arr[middle] === element) return true
		if (arr[middle] < element) start = middle + 1
		else end = middle - 1
	}
	return false
}
console.log(isArrIncludesElement(names, 'Olga'))

//Проверяем есть ли такой элемент и возвращаем его индекс
function findElementIndex(arr, element) {
	let start = 0
	let end = arr.length - 1
	while (start <= end) {
		const middle = Math.floor((start + end) / 2)
		if (arr[middle] === element) return middle
		if (arr[middle] < element) start = middle + 1
		else end = middle - 1
	}
	return -1
}
const nameIdx = findElementIndex(names, 'Olga')

//Просто вывод сообщения чтобы одной ф-цией давать ответ на 2 вопроса
function logMessage(nameIdx) {
	const message = nameIdx > 0 ? `Таке ім'я є в массиві під індексом ${nameIdx}` : "Таке ім'я відсутне в массиві"
	console.log(message)
	return message
}
logMessage(nameIdx)
