'use strict'

const monthNumber = parseInt(prompt('Введіть порядковий номер місяця, щоб визначити пору року', '3'))
//========================================================================================================================================================

function getSeason(monthNumber) {
	let seasonName
	switch (monthNumber) {
		case 12:
		case 1:
		case 2:
			seasonName = 'Зимовий'
			break
		case 3:
		case 4:
		case 5:
			seasonName = 'Весняний'
			break
		case 6:
		case 7:
		case 8:
			seasonName = 'Літній'
			break
		case 9:
		case 10:
		case 11:
			seasonName = 'Осінній'
			break
		default:
			seasonName = '*__Error__*'
			break
	}
	return seasonName
}
let seasonName = getSeason(monthNumber)
alert(`${monthNumber}-й місяць року - ${seasonName} місяць.`)

/* 
function getSeason(monthNumber) {
	switch (monthNumber) {
		case 12:
		case 1:
		case 2:
			return 'Зимовий'
		case 3:
		case 4:
		case 5:
			return 'Весняний'
		case 6:
		case 7:
		case 8:
			return 'Літній'
		case 9:
		case 10:
		case 11:
			return 'Осінній'
		default:
			return '*__Error__*'
	}
}
let seasonName = getSeason(monthNumber)
alert(`${monthNumber}-й місяць року - ${seasonName} місяць.`)
 */


// Если пользователь вводит только корректные данные (1-12) - короче свича
/* 
function getSeason(monthNumber) {
	let seasonName
	if (monthNumber > 11 || monthNumber < 3) seasonName = 'Зимовий'
	else if (monthNumber > 8) seasonName = 'Осінній'
	else if (monthNumber > 5) seasonName = 'Літній'
	else seasonName = 'Весняний'
	return seasonName
}
let seasonName = getSeason(monthNumber)
alert(`${monthNumber}-й місяць року - ${seasonName} місяць.`) 
*/