'use strict'

// Будет запрашивать темперутуру пока пользователь не нажмет отмену, либо не введет пустое\некорректное значение
function getNegativeTempsCount() {
	let negativeTempsCount = 0
	let tempValue
	do {
		tempValue = parseFloat(prompt('Введіть показник температури', '3'))
		if (tempValue < 0) negativeTempsCount++
	} while (Boolean(tempValue) == true || tempValue === 0)
	return negativeTempsCount
}
alert(`Серед усіх введених показників було ${getNegativeTempsCount()} від’ємних показників температури.`)

//========================================================================================================================================================
/* 
// Без промпта, просто функция
function getNegativeTempsCount() {
	let negativeTempsCount = 0
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] < 0) negativeTempsCount++
	}
	return negativeTempsCount
}
*/
