'use strict'

// Задача. Створити клас TTime для роботи із часом у форматі “години:хвилини”. Час представляється структурою із двома полями. Реалізувати методи збільшення/зменшення  часу на певну кількість годин чи хвилин.
// ---- Властивості
//  * години
//  * хвилини
// ---- Методи (дії, які треба робити)
//   * метод збыльшення годин
//   * метод зменшення годин
//   * метод збыльшення хвилин
//   * метод зменшення хвилин

class TTime {
	constructor(initHours, initMinutes) {
		this.hours = initHours
		this.minutes = initMinutes
	}
	increaseHours(value) {
		this.hours = (this.hours + value) % 24
	}
	//завершити
	// decreaseHours(value) {
	// 	this.hours -= value
	// }
	increaseMinutes(value) {
		this.minutes += value
		this.increaseHours(Math.floor(this.minutes / 60))
		this.minutes = this.minutes % 60 //15
	}
	//завершити
	// decreaseMinutes(value) {
	// 	this.minutes -= value
	// }
	toString() {
		return `${this.hours} : ${this.minutes}`
	}
	//========================================================================================================================================================
	decreaseHours(value) {
		this.hours = (this.hours - value + 24) % 24
	}
	decreaseMinutes(value) {
		const total = Math.abs(this.hours * 60 + this.minutes - value)
		this.hours = Math.floor(total / 60) % 24
		this.minutes = total % 60
	}
	//=========================================================================================
	// кое как оно конечно работает, но только если методы применять по отдельности, если запустить их вместе будет беда(
	// к примеру
	// t1.decreaseHours(12)
	// t1.decreaseMinutes(47)
	// вызывают ошиибку в расчетах, не могу понять как исправить
}

let t1 = new TTime(12, 45)
// t1.increaseHours(72)
// t1.increaseMinutes(20)

//=========================================================================================
t1.decreaseHours(12)
t1.decreaseMinutes(46)
// document.write(t1)
//=========================================================================================

