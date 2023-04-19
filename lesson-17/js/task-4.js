'use strict'

/* 
Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції. 
*/

class Stars {
	randomPos() {
		return Math.floor(Math.random() * 100)
	}
	randomAnim() {
		return 300 + Math.floor(Math.random() * (1000 - 300 + 1))
	}
	randomColor() {
		return Math.floor(Math.random() * 2) ? '#e7e785' : '#ffffff'
	}
	render(parentselector) {
		const star = document.createElement('div')
		star.className = 'star'
		star.style.cssText = `
			left: ${this.randomPos()}%; 
            top:${this.randomPos()}%;
			width: 1px;
			height:1px;
            background-color: ${this.randomColor()};`

		document.querySelector(parentselector).append(star)

		setInterval(() => {
			star.style.width = parseInt(star.style.width) + 1 + 'px'
			star.style.height = parseInt(star.style.height) + 1 + 'px'
			if (parseInt(star.style.height) === 5) {
				star.remove()
				this.render(parentselector)
			}
		}, this.randomAnim())
	}
}

for (let index = 0; index < 150; index++) {
	const ss = new Stars()
	ss.render('.task__body')
}
