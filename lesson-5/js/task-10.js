'use strict'

function getAveragePositiveTemp() {
	let positiveTempsCount = 0
	let positiveTempsSum = 0
	let tempValue
	do {
		tempValue = parseFloat(prompt('Введіть показник температури', '3'))
		if (tempValue > 0) {
			positiveTempsSum += tempValue
			positiveTempsCount++
		}
	} while (Boolean(tempValue) == true || tempValue === 0)
	let positiveAverageTemp = positiveTempsSum / positiveTempsCount
	return positiveAverageTemp
}
alert(`Середне значення з усіх введених позитивних показників температур дорівнює ${getAveragePositiveTemp()}.`)

//========================================================================================================================================================
/* 
// Без промпта, просто функция
function getAveragePositiveTemp() {
	let positiveTempsCount = 0
	let positiveTempsSum = 0
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > 0) {
			positiveTempsSum += arguments[i]
			positiveTempsCount++
		}
	}
	let positiveAverageTemp = positiveTempsSum / positiveTempsCount
	return positiveAverageTemp
}

*/
