'use strict'

class IsNumber extends Error {
	constructor() {
		super()
		this.name = 'IsNumber'
		this.message = 'Invalid input: Please enter a numeric value.'
	}
}

class InRangeNumber extends Error {
	constructor() {
		super()
		this.name = 'InRangeNumber'
		this.message = 'Invalid input: The entered number is out of range.'
	}
}

class IsHolidays extends Error {
	constructor() {
		super()
		this.name = 'IsHolidays'
		this.message = 'Invalid input: month number corresponds to school holiday dates.'
	}
}

class IsGradeLow extends Error {
	constructor() {
		super()
		this.name = 'IsGradeLow'
		this.message = 'Invalid input: The user`s academic performance is satisfactory.'
	}
}

class IsLastMonthOfSemester extends Error {
	constructor() {
		super()
		this.name = 'IsLastMonthOfSemester'
		this.message = 'Invalid input: The entered month is the last month of the semester.'
	}
}

function validate() {
	const month = parseInt(document.querySelector('#month').value)
	const grade = parseInt(document.querySelector('#grade').value)
	let retake = true
	try {
		if (isNaN(month)) throw new IsNumber()
		if (isNaN(grade)) throw new IsNumber()

		if (month < 0 || month > 12) throw new InRangeNumber()
		if (grade < 0 || grade > 100) throw new InRangeNumber()

		if (grade > 79) throw new IsGradeLow()

		switch (month) {
			case 5:
			case 12:
				throw new IsLastMonthOfSemester()
			case 6:
			case 7:
			case 8:
				throw new IsHolidays()
		}
	} catch (err) {
		if (err instanceof IsNumber) {
			alert(`${err.message} (month or grade)`)
		} else if (err instanceof InRangeNumber) {
			alert(`${err.message} (month or grade)`)
		} else if (err instanceof IsGradeLow) {
			alert(err.message)
		} else if (err instanceof IsLastMonthOfSemester) {
			alert(err.message)
		} else if (err instanceof IsHolidays) {
			alert(err.message)
		}
		retake = false
	} finally {
		if (retake) alert('Пересдачу дозволено')
		document.querySelector('#month').value = ''
		document.querySelector('#grade').value = ''
		return false
	}
}

document.querySelector('form').onsubmit = validate
