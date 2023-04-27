'use strict'

document.querySelector('.task-form').addEventListener('click', function (e) {
	if (e.target.tagName === 'INPUT') e.target.value = 0
})
