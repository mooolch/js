'use strict'

class FullYearsCounter {
	calcUsersAge(inp_selector, outut_selector) {
		const yearOfBirth = parseInt(document.querySelector(inp_selector).value)
		const nowYear = new Date().getFullYear()
		const usersAge = nowYear - yearOfBirth
		document.querySelector(outut_selector).innerText = usersAge + ' р.'
	}
}

const calcYear = new FullYearsCounter()
document.querySelector('.inp').onchange = () => calcYear.calcUsersAge('.inp', '.res')
