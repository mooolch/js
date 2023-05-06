'use strict'

const randomNum = (minVal, maxVal) => minVal + Math.floor(Math.random() * (maxVal - minVal + 1))

function getRandomArr(minVal, maxVal, arrLength) {
	const arr = []
	for (let i = 0; i < arrLength; i++) {
		const random = randomNum(minVal, maxVal)
		arr.push(random)
	}
	return arr
}

const defaultArr = getRandomArr(1, 800, 5000)

//========================================================================================================================================================

function calcBubbleSortTime(arr) {
	const initArr = [...arr]
	const startSortingTime = new Date()
	let changed
	do {
		changed = false
		for (let i = 1; i < initArr.length; i++) {
			if (initArr[i - 1] > initArr[i]) {
				;[initArr[i - 1], initArr[i]] = [initArr[i], initArr[i - 1]]
				changed = true
			}
		}
	} while (changed)

	console.log(initArr)

	const sortingtTime = new Date() - startSortingTime
	return sortingtTime
}

const bubbleSortTime = calcBubbleSortTime(defaultArr)

//========================================================================================================================================================

function calcInsertSortTime(arr) {
	const initArr = [...arr]
	const startSortingTime = new Date()
	for (let i = 1; i < initArr.length; i++) {
		const currEl = initArr[i]
		let j = i - 1
		while (j >= 0 && initArr[j] > currEl) {
			initArr[j + 1] = initArr[j]
			j = j - 1
		}
		initArr[j + 1] = currEl
	}
	console.log(initArr)

	const sortingtTime = new Date() - startSortingTime
	return sortingtTime
}

const insertSortTime = calcInsertSortTime(defaultArr)

//========================================================================================================================================================
const res = document.createElement('div')
res.innerText = `Час сортування "Бульбашкою" - ${bubbleSortTime} мс.`
document.querySelector('.task__body').append(res)

const res2 = document.createElement('div')
res2.innerText = `Час сортування "Вставками" - ${insertSortTime} мс.`
document.querySelector('.task__body').append(res2)
