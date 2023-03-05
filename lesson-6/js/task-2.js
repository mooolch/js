'use strict'

// Cоздаем себе массив с кол-вом посетителей за 7 рабочих дней (условно берем диапазон от 10 до 50 посетителей в день)
function generateRandomVisitorsNum(minVisitorsNum, maxVisitorsNum, period) {
	const visitorsPerWeek = []
	for (let i = 0; i < period; i++) {
		const randomNum = minVisitorsNum + Math.floor(Math.random() * (maxVisitorsNum - minVisitorsNum + 1))
		visitorsPerWeek.push(randomNum)
	}
	return visitorsPerWeek
}
const visitorsPerWeek = generateRandomVisitorsNum(10, 50, 7)
console.log(visitorsPerWeek)
//========================================================================================================================================================

//Получаем массив дней в которые было меньше 20 посетителей
function getDaysBelow20Visitors(visitorsPerWeek) {
	const days = []
	for (let i = 0; i < visitorsPerWeek.length; i++) {
		if (visitorsPerWeek[i] < 20) {
			let day = i + 1
			days.push(day)
		}
	}
	// Можно заменить const на let при создании массива days и добавить проверку, но лучше наверное так делать уже не в функции, а при выводе информации
	// if (days.length === 0) days = 'На цьому тижні не було меньше ніж 20 відвідувачів за день'
	return days
}
console.log(getDaysBelow20Visitors(visitorsPerWeek))

//Получаем массив дней в которые было минимальное количество посетителей
function getMinVisitorsDays(visitorsPerWeek) {
	const days = []
	let min = visitorsPerWeek[0]
	for (let i = 1; i < visitorsPerWeek.length; i++) {
		if (visitorsPerWeek[i] < min) min = visitorsPerWeek[i]
	}
	for (let i = 0; i < visitorsPerWeek.length; i++) {
		if (visitorsPerWeek[i] === min) {
			let day = i + 1
			days.push(day)
		}
	}
	return days
}
console.log(getMinVisitorsDays(visitorsPerWeek))

//Получаем массив дней в которые было максимальное количество посетителей
function getMaxVisitorsDays(visitorsPerWeek) {
	const days = []
	let max = visitorsPerWeek[0]
	for (let i = 1; i < visitorsPerWeek.length; i++) {
		if (visitorsPerWeek[i] > max) max = visitorsPerWeek[i]
	}
	for (let i = 0; i < visitorsPerWeek.length; i++) {
		if (visitorsPerWeek[i] === max) {
			let day = i + 1
			days.push(day)
		}
	}
	return days
}
console.log(getMaxVisitorsDays(visitorsPerWeek))

//Находим количество посетителй за промежуток времени (1-5 будние дни, 6-7 выходные, дублируем начало и конец интервала если нужно количество только за один день ((3,3) - выдаст кол-во посетителей за 3-й день недели))
function getVisitorsForThePeriod(startPeriod, endPeriod, visitorsPerWeek) {
	startPeriod--
	let visitorsForThePeriod = 0
	for (; startPeriod < endPeriod; startPeriod++) {
		visitorsForThePeriod += visitorsPerWeek[startPeriod]
	}
	return visitorsForThePeriod
}
console.log(getVisitorsForThePeriod(1, 5, visitorsPerWeek))
console.log(getVisitorsForThePeriod(6, 7, visitorsPerWeek))
