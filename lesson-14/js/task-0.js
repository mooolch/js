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
		this.hours = (this.hours - value) % 24
	}
}

let t1 = new TTime(3, 45)
// t1.increaseHours(72)
// t1.increaseMinutes(20)

t1.decreaseHours(4)

document.write(t1)
