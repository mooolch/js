'use strict'

document.querySelector('form').addEventListener('submit', function (e) {
	const vacationStart = this.querySelector('[type="date"]').value
	const vacationDays = parseInt(this.querySelector('[type="number"]').value)

	const date = new Date(vacationStart)
	date.setDate(date.getDate() + vacationDays)

	this.querySelector('#res').innerText = `Останній день відпустки: ${date.toLocaleDateString()}`

	e.preventDefault()
})
