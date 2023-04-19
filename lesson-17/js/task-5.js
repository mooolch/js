'use strict'

class Tank {
	constructor(tankImgSrc, explosionImgSrc) {
		this.counter = 0
		this.tankImg = tankImgSrc
		this.explosionImg = explosionImgSrc
	}
	randomTop() {
		return Math.random() * -30
	}
	randomPos() {
		return Math.floor(Math.random() * 96)
	}
	tanksRun(parentSelector, resSelector) {
        this.result = document.querySelector(resSelector)
        this.result.innerHTML = `Танків знищено: ${this.counter}`
        
        const tank = document.createElement('img')
        
		tank.src = this.tankImg
		tank.style.left = this.randomPos() + '%'
		tank.style.top = this.randomTop() + '%'
		tank.style.width = 50 + 'px'
		tank.style.height = 50 + 'px'
        tank.className = 'tank'
        
        document.querySelector(parentSelector).append(tank)
        
		tank.onmousedown = function () {
			this.counter++
			tank.src = this.explosionImg
			setTimeout(() => {
				tank.remove()
				this.result.innerHTML = `Танків знищено: ${this.counter}`
				this.tanksRun(parentSelector, resSelector)
			}, 100)
        }.bind(this)
        
		setInterval(() => {
			tank.style.transition = 'top 0.3s linear'
			tank.style.top = parseInt(tank.style.top) + 1 + '%'
			if (tank.style.top === '110%') {
				tank.style.transition = 'top 0s linear'
				tank.style.left = this.randomPos() + '%'
				tank.style.top = this.randomTop() + '%'
			}
		}, 30)
	}
}

const ttt = new Tank('../img/tank.png', '../img/expl.png')
for (let index = 0; index < 7; index++) {
	ttt.tanksRun('.tanks', '.res')
}
