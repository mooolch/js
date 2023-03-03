'use strict'

const monthNumber = parseInt(prompt('Введіть порядковий номер місяця, щоб вивести його назву', '3'))

function getMonthName(monthNumber) {
	let monthName
	switch (monthNumber) {
		case 1:
			monthName = 'Січень'
			break
		case 2:
			monthName = 'Лютий'
			break
		case 3:
			monthName = 'Березень'
			break
		case 4:
			monthName = 'Квітень'
			break
		case 5:
			monthName = 'Травень'
			break
		case 6:
			monthName = 'Червень'
			break
		case 7:
			monthName = 'Липень'
			break
		case 8:
			monthName = 'Серпень'
			break
		case 9:
			monthName = 'Вересень'
			break
		case 10:
			monthName = 'Жовтень'
			break
		case 11:
			monthName = 'Листопад'
			break
		case 12:
			monthName = 'Грудень'
			break
		default:
			monthName = '*__Error__*'
			break
	}
	return monthName
}

let monthName = getMonthName(monthNumber)
alert(`${monthNumber}-й місяць року - ${monthName}.`)
