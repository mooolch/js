'use strict'

//Cоздаем себе массив с 10 cлучайными именами
function generateNames(namesQuantity) {
	const names = []
	for (let i = 0; i < namesQuantity; i++) {
		const randomNum = 1 + Math.floor(Math.random() * namesQuantity)
		if (randomNum > 5) names.push('Катя')
		else names.push('Іван')
	}
	return names
}
const names = generateNames(10)
console.log(names)
//========================================================================================================================================================

// Ищем в массиве нужное имя
function getNamesCount(studentName, names) {
	let targetNameCount = 0
	for (let i = 0; i < names.length; i++) {
		if (names[i] === studentName) targetNameCount++
	}
	return targetNameCount
}
console.log(getNamesCount('Іван', names))
