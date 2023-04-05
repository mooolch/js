'use strict'

// Для удобства взял год как 360 дней = 12 мес по 30 дней.
class TDate {
	#day
	#month
	#year
	constructor(day, month, year) {
		this.Day = day
		this.Month = month
		this.Year = year
	}
	get Day() {
		return this.#day
	}
	get Month() {
		return this.#month
	}
	get Year() {
		return this.#year
	}
	set Day(d) {
		if (d < 1 || d > 30) throw new Error('Incorrect days number')
		this.#day = d
	}
	set Month(m) {
		if (m < 1 || m > 12) throw new Error('Incorrect months number')
		this.#month = m
	}
	set Year(y) {
		if (y < 1) throw new Error('Incorrect years number')
		this.#year = y
	}
	toString() {
		return `${this.#day}.${this.#month}.${this.#year}`
	}
	//=========================================================================================
	// if (value < 1) throw new Error('Incorrect years number')
	// без этой проверки методы принимают отрицательные числа и могут минусовать значения вместо плюса и наоброт
	//=========================================================================================
	increseYears(value) {
		if (value < 1) throw new Error('Incorrect years number')
		this.Year += value
	}
	decreseYears(value) {
		if (value < 1) throw new Error('Incorrect years number')
		this.Year -= value
	}
	increseMonths(value) {
		if (value < 1) throw new Error('Incorrect months number')
		const total = this.#month + value
		this.Year += Math.trunc((total - 1) / 12)
		this.Month = ((total - 1) % 12) + 1
	}
	decreseMonths(value) {
		if (value < 1) throw new Error('Incorrect months number')
		const total = this.#year * 12 + this.#month - value
		this.Year = Math.trunc((total - 1) / 12)
		this.Month = ((total - 1) % 12) + 1
	}
	increseDays(value) {
		if (value < 1) throw new Error('Incorrect days number')
		const total = this.#year * 360 + this.#month * 30 + this.#day + value
		this.Year = Math.trunc(total / 360)
		this.Month = Math.trunc(((total % 360) - 1) / 30)
		this.Day = (((total % 360) - 1) % 30) + 1
	}
	decreseDays(value) {
		if (value < 1) throw new Error('Incorrect days number')
		const total = this.#year * 360 + this.#month * 30 + this.#day - value
		this.Year = Math.trunc(total / 360)
		this.Month = Math.trunc(((total % 360) - 1) / 30)
		this.Day = (((total % 360) - 1) % 30) + 1
	}
}
// Долго делал все функции пересчета времени... чтобы они пересчитывали любое количество дней или месяцев в номарльную дату, и как мне кажется сильно намудрил
// есть вариант организовать это лучше?

const testDate = new TDate(21, 7, 2003)
console.log(testDate)


