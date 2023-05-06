'use strict'

document.querySelector('form').addEventListener('submit', function (e) {
	const prodYear = document.getElementById('year').value
	const prodMonth = document.getElementById('month').value
	const prodDay = parseInt(document.getElementById('day').value)

	const daysToExp = parseInt(document.getElementById('exp-date').value)

	const expDate = new Date()
	expDate.setFullYear(prodYear, prodMonth - 1, prodDay + daysToExp)

	const nowDate = new Date()
	const msg = expDate >= nowDate ? 'Продукт придатний до споживання' : 'Продукт протерміновано'

	this.querySelector('#res').innerText = msg
	e.preventDefault()
})

