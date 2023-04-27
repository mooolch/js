'use strict'

document.getElementById('t1').addEventListener('click', function (e) {
	if (e.target.className === 'hello') {
		let elem = e.target
		while (elem.nextElementSibling) {
			elem = elem.nextElementSibling
			elem.style.color = 'red'
		}
	}
})
