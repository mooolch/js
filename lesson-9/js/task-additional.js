'use strict'

const yearVisitorsInfo = [
	[
		78, 84, 40, 40, 94, 79, 87, 51, 48, 36, 55, 35, 63, 41, 77, 34, 59, 94, 50, 56, 97, 34, 24, 24, 65, 52, 43, 46,
		30, 23, 59,
	],
	[97, 24, 48, 46, 67, 94, 39, 59, 74, 29, 24, 27, 79, 63, 69, 72, 55, 45, 46, 91, 39, 88, 70, 89, 18, 65, 31, 36],
	[
		51, 60, 80, 66, 54, 18, 16, 60, 16, 65, 86, 53, 34, 83, 47, 44, 75, 99, 35, 31, 23, 58, 76, 19, 55, 90, 71, 95,
		54, 18, 33,
	],
	[
		94, 85, 43, 98, 40, 71, 48, 95, 55, 88, 63, 23, 68, 79, 28, 41, 80, 94, 68, 82, 18, 87, 58, 73, 40, 35, 28, 52,
		33, 29,
	],
	[
		52, 39, 38, 44, 35, 17, 47, 64, 68, 49, 69, 61, 96, 77, 24, 55, 100, 45, 45, 62, 16, 42, 27, 48, 60, 28, 94, 37,
		71, 80, 65,
	],
	[
		79, 64, 41, 67, 65, 61, 97, 41, 58, 23, 42, 19, 59, 96, 60, 16, 79, 46, 78, 52, 57, 81, 95, 96, 57, 81, 82, 53,
		82, 61,
	],
	[
		45, 43, 60, 15, 93, 52, 29, 17, 45, 46, 30, 41, 61, 15, 68, 41, 73, 36, 73, 77, 32, 77, 57, 96, 89, 21, 23, 39,
		54, 25, 97,
	],
	[
		64, 26, 26, 25, 72, 53, 38, 63, 27, 82, 96, 37, 51, 83, 16, 59, 19, 31, 26, 36, 36, 23, 48, 23, 47, 40, 65, 97,
		71, 88, 75,
	],
	[
		52, 86, 37, 18, 53, 86, 77, 78, 41, 39, 23, 26, 27, 77, 99, 88, 72, 29, 79, 66, 93, 49, 39, 62, 44, 99, 59, 18,
		71, 16,
	],
	[
		63, 21, 47, 64, 47, 86, 98, 95, 77, 59, 21, 64, 83, 29, 29, 32, 84, 35, 71, 16, 44, 29, 46, 51, 52, 53, 85, 27,
		63, 28, 22,
	],
	[
		85, 57, 33, 60, 61, 24, 68, 26, 78, 100, 74, 19, 80, 93, 111, 79, 56, 92, 43, 87, 26, 99, 80, 33, 40, 49, 79,
		55, 86, 83,
	],
	[
		86, 60, 49, 67, 66, 57, 93, 18, 69, 41, 19, 98, 46, 60, 47, 100, 72, 24, 56, 32, 34, 94, 56, 23, 98, 23, 42, 19,
		54, 51, 56,
	],
]

//========================================================================================================================================================
//Задача. Дано кількість відвідувачів кафе протягом року (для кожного місяця за кожен день). Визначити :
// 1) загальну кількість відвідувачів;
// 2) кількість відвідувачів за літо;
// 3) кількість відвідувачів за друге півріччя;

//========================================================================================================================================================
// 1) загальну кількість відвідувачів;
const totalYearVisitors = yearVisitorsInfo.reduce(
	(totalYearSum, month) => totalYearSum + month.reduce((monthSum, day) => monthSum + day),
	0
)

/* 
let totalYearVisitors = 0
for (const month of yearVisitorsInfo) {
	let monthSum = 0
	for (const day of month) {
		monthSum += day
	}
	totalYearVisitors += monthSum
} 
*/
console.log(totalYearVisitors)
//========================================================================================================================================================

//========================================================================================================================================================
// 2) кількість відвідувачів за літо
// 3) кількість відвідувачів за друге півріччя

function getVisitorsCountInPeriod(startMonth, endMonth, yearVisitorsInfo) {
	const visitorsInPeriod = yearVisitorsInfo.reduce((visitorsNum, month, index) => {
		if (index >= startMonth - 1 && index <= endMonth - 1)
			return visitorsNum + month.reduce((monthSum, day) => (monthSum += day))
		else return visitorsNum
	}, 0)
	return visitorsInPeriod
}

/* 
function getVisitorsCountInPeriod(startMonth, endMonth, yearVisitorsInfo) {
	let visitorsInPeriod = 0
	yearVisitorsInfo.forEach((month, index) => {
		if (index >= startMonth - 1 && index <= endMonth - 1) {
			let monthSum = 0
			for (const day of month) {
				monthSum += day
			}
			visitorsInPeriod += monthSum
		}
	})
	return visitorsInPeriod
}
*/

console.log(getVisitorsCountInPeriod(6, 8, yearVisitorsInfo))

//========================================================================================================================================================
// Задача. Дано зріст учнів у школі (у кожному із класів кількість учнів може бути різною). Знайти :
// 1)найвищого учня у школі
// 2)найвищого учня у кожному класі

const maxVal = yearVisitorsInfo.reduce((max, el) => (max > Math.max(...el) ? max : Math.max(...el)), 0)

// 1)найвищого учня у школі
const maxValue = yearVisitorsInfo.reduce(
	(maxVal, el) =>
		maxVal > el.reduce((max, el) => (max > el ? max : el)) ? maxVal : el.reduce((max, el) => (max > el ? max : el)),
	0
)
console.log(maxValue)

// 2)найвищого учня у кожному класі
const maxValues = yearVisitorsInfo.reduce((maxValues, el) => {
	maxValues.push(el.reduce((max, el) => (max > el ? max : el), 0))
	return maxValues
}, [])
console.log(maxValues)

//========================================================================================================================================================
//Задача. Дано зріст учнів у К школах. Сформувати список, тільки з тих величин зросту, які більші за 150см (массив значений от 15 до 100, поэтом для задачи возму 50 см.)

const highetsThan50Values = yearVisitorsInfo.reduce((maxValues, el) => {
	maxValues.push(...el.filter(el => el > 50))
	return maxValues
}, [])
console.log(highetsThan50Values)

/* 
const highetsThan50Values = []
for (const school of yearVisitorsInfo) {
	for (const studentHeight of school) {
		if (studentHeight > 50) highetsThan50Values.push(studentHeight)
	}
}
console.log(highetsThan50Values2)
*/

//========================================================================================================================================================
// Упорядкувати так, щоб спочатку були виграші/програші(тобто по модулю) <10, потім <100,потім <200,потім <300,потім 400,потім <=500
const scores = [56, -78, 252, 23, 11, -1, 4, 8, -122, 356, 0, 122, 436, -111, 0, 344, 21, 3, -356, 342]

scores.sort((el1, el2) => {
	return Math.abs(el1) - Math.abs(el2)
})

console.log(scores)
