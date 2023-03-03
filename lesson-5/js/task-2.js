'use strict'

const dayNumber = parseInt(prompt('Введіть порядковий номер дня тижня, щоб визначити робочий він чи ні(1-7)', '3'))
//========================================================================================================================================================

// Если пользователь вводит только корректные данные (1-7) - самый короткий вариант

function isDayWorking(dayNumber) {
	return dayNumber > 5
}
let todayIs = isDayWorking(dayNumber) ? 'Вихідний' : 'Робочий'
alert(`Cьогодні - ${todayIs} день.`)

// Если пользователь вводит только корректные данные (1-7) - короче свича
/* 
function іsDayWorking(dayNumber) {
	let day
	if (dayNumber > 5) day = 'Вихідний'
	else day = 'Робочий'
	return day
}
alert(`Cьогодні - ${іsDayWorking(dayNumber)} день.`)
*/