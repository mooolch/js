'use strict'

// Cоздаем себе массив с 7 рандомными оценками для проверки
function generateRandomGrades(gradesQuantity, maxGrade) {
	const grades = []
	for (let i = 0; i < gradesQuantity; i++) {
		let randomNum = 1 + Math.floor(Math.random() * maxGrade)
		grades.push(randomNum)
	}
	return grades
}
const grades = generateRandomGrades(7, 5)

//Получаем среднюю оценку
function getAverageGrade(studentGrades) {
	let gradesSum = 0
	for (let i = 0; i < studentGrades.length; i++) {
		gradesSum += studentGrades[i]
	}
	let averageGrade = gradesSum / studentGrades.length
	return averageGrade
}

//Получаем минимальную оценку чтобы проверить потом под какую категорию подходит ученик
function getMinGrade(studentGrades) {
	let min = studentGrades[0]
	for (let i = 1; i <= studentGrades.length; i++) {
		if (studentGrades[i] < min) min = studentGrades[i]
	}
	return min
}

//Проверяем под какую категорию подходит ученик
function getStudentsReportCardName(studentsMinGrade) {
	let studentsReportCardName
	switch (studentsMinGrade) {
		case 1:
		case 2:
			studentsReportCardName = 'Двійочник'
			break
		case 3:
			studentsReportCardName = 'Трійочник'
			break
		case 4:
			studentsReportCardName = 'Хорошист'
			break
		case 5:
			studentsReportCardName = 'Відмінник'
			break
		default:
			studentsReportCardName = 'Помилка при вводі оцінки'
			break
	}
	return studentsReportCardName
}

// Главная функция для вызова вспомогательных
function showResult(grades) {
	let studentsAverageGrade = getAverageGrade(grades)
	let studentMinGrade = getMinGrade(grades)
	let studentsReportCardName = getStudentsReportCardName(studentMinGrade)
	//Вывод в консоль для наглядности
	console.log(grades)
	console.log(`Cередня оцінка учня ${studentsAverageGrade.toFixed(1)}, Він - ${studentsReportCardName}.`)
}

showResult(grades)
