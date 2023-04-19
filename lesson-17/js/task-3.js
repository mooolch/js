'use strict'
/*
    Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану і з випадковою швидкістю рухається
	вниз. Як
    тільки сніжинка досягає нижньої частини екрану вона знову повинна з’явитись у верхній частині екрану.
*/

class Snow {
	randomAnim() {
		return Math.random() * 4.5 + 0.8
	}
	randomSize() {
		return Math.random() * 5 + 1
	}
	randomTopPosition() {
		return Math.random() * -20
	}
	runSnowstorm(parentSelector, snowLevel) {
		// snowLevel is recomended  betwen 1 and 5
		for (let i = 0, j = 0; j < snowLevel; i++) {
			const snowFlake = document.createElement('div')
			snowFlake.className = 'snowflake'
			const randomSize = this.randomSize()
			snowFlake.style.cssText = `
			left: ${i}%; top:${this.randomTopPosition()}%;
			width: ${randomSize}px;
			height: ${randomSize}px;
			animation: snowstorm${i % 2} ${this.randomAnim()}s infinite linear ${this.randomAnim()}s;`
			document.querySelector(parentSelector).append(snowFlake)
			if (i === 100) {
				i = 0
				j++
			}
		}
	}
}

const bliz = new Snow()
bliz.runSnowstorm('.snow', 3)


//========================================================================================================================================================
// Это был первый вариант снега, но он мне не нравится. Не могу ничего адекватного сделать с анимацией снега
// я его бросил и не оптимизировал

/* 
function randomSize() {
	return Math.random() * 5 + 1
}

function randomAnim() {
	return Math.random() * 30
}
function randomTop() {
	return Math.random() * -50
}

for (let index = 0; index < 100; index++) {
	const snowFlake = document.createElement('div')
	const size = randomSize()
	snowFlake.style.left = index + '%'
	snowFlake.style.opacity = 1
	snowFlake.style.top = randomTop() + '%'
	snowFlake.style.width = size + 'px'
	snowFlake.style.height = size + 'px'
	snowFlake.className = 'snowflake'
	snowFlake.style.transition = Math.random() + 's'
	document.querySelector('.snow').append(snowFlake)

	setInterval(() => {
		snowFlake.style.top = parseInt(snowFlake.style.top) + 1 + '%'
		if (snowFlake.style.top === '100%') {
			snowFlake.style.transition = 0 + 's'
			snowFlake.style.top = 0
		}
	}, randomAnim())
}
*/