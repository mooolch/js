'use strict'

console.log('Оцінки 3, 4, 5, 1, 3, 4, 3, 2, 3, 5, 1, 5, 5, 2, 1, 4, 2, 5')
// Считаем количество нужных нам оценок
function countNegativeGrades(tradgetGrade, ...grades) {
	let negativeGradesCount = 0
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] === tradgetGrade) negativeGradesCount++
	}
	return negativeGradesCount
}
const tradgetGrade = 2
console.log(countNegativeGrades(tradgetGrade, 3, 4, 5, 1, 3, 4, 3, 2, 3, 5, 1, 5, 5, 2, 1, 4, 2, 5))

// Считаем оценки в нужном диапазоне, например "хорошо и отлично 4-5". Этой же функцией можно пользоваться для выполнения предыдущей задачи если выставить диапазон 2-2
function countGrades(minGrade, maxGrade, ...grades) {
	let gradesCount = 0
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] >= minGrade && grades[i] <= maxGrade) gradesCount++
	}
	return gradesCount
}
const minGrade = 4
const maxGrade = 5
console.log(countGrades(minGrade, maxGrade, 3, 4, 5, 1, 3, 4, 3, 2, 3, 5, 1, 5, 5, 2, 1, 4, 2, 5))

//Находим кол-во оценок ниже среднего
function countBelowAverageGrades(...grades) {
	//Находим среднююю оценку
	let gradesSum = 0
	for (let i = 0; i < grades.length; i++) {
		gradesSum += grades[i]
	}
	let averageGrade = gradesSum / grades.length
	//Находим кол-во оценок ниже среднего
	let gradesBelowAverage = 0
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] < averageGrade) gradesBelowAverage++
	}
	return gradesBelowAverage
}
console.log(countBelowAverageGrades(3, 4, 5, 1, 3, 4, 3, 2, 3, 5, 1, 5, 5, 2, 1, 4, 2, 5))
