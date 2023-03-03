'use strict'

const length = parseFloat(prompt('Введіть довжину, у см.', '33'))
const weight = parseFloat(prompt('Введіть вагу, у кг.', '9.8'))
const distance = parseFloat(prompt('Введіть відстань, у км.', '15'))

// См в дюймы
function convertCmToInch(cm) {
	const cmToInchRatio = 0.393701
	return cm * cmToInchRatio
}

//Кг в фунты
function convertKgToLb(kg) {
	const kgToLbRatio = 2.20462
	return kg * kgToLbRatio
}

//Км в мили
function convertKmToMile(km) {
	const kmToMileRatio = 0.621371
	return km * kmToMileRatio
}

//Вывод сообщения
function showMessage(cm, kg, km) {
	const msg1 = convertCmToInch(cm)
	const msg2 = convertKgToLb(kg)
	const msg3 = convertKmToMile(km)
	alert(
		`${length} см. - це ${msg1.toFixed(3)} дюймів.\n${weight} кг. - це ${msg2.toFixed(
			3
		)} фунтів.\n${distance} км. - це ${msg3.toFixed(3)} миль.`
	)
}

showMessage(length, weight, distance)
