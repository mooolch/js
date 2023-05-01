'use strict'

class Parent {
	constructor(ItemDataObj) {
		Object.assign(this, ItemDataObj)
		this.el = this.createEl()
	}
	randomVal(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}
	createEl() {
		const container = document.createElement('div')
		container.style.position = 'absolute'
		container.style.top = `${this.position_Y}%`
		container.style.left = `${this.position_X}%`
		container.classList.add('item')

		const img = document.createElement('img')
		img.src = this.imageSrc

		container.append(img)
		return container
	}
	render(parentSelector) {
		document.querySelector(parentSelector).append(this.el)
	}
}

const doge = {
	position_X: 0,
	position_Y: 45,
	imageSrc: '../img/dog.png',
	refreshInterval: 1.5,
}
const castle = {
	position_X: 40,
	position_Y: 80,
	imageSrc: '../img/house.png',
	refreshInterval: 2,
}
const bird = {
	position_X: 1,
	position_Y: 70,
	imageSrc: '../img/bird.png',
	refreshInterval: 1,
}

class Dog extends Parent {
	constructor(ItemDataObj) {
		super(ItemDataObj)
	}
	dynamicChangePosition(minPos, MaxPos, interval = this.refreshInterval) {
		setInterval(() => {
			this.el.style.left = `${this.randomVal(minPos, MaxPos)}%`
		}, interval * 1000)
	}
	render(parentSelector) {
		super.render(parentSelector)
	}
}

const d1 = new Dog(doge)
d1.render('.task__body')
d1.dynamicChangePosition(1, 70)
//========================================================================================================================================================

class House extends Parent {
	constructor(ItemDataObj) {
		super(ItemDataObj)
	}
	dynamicChangeSize(minSize, MaxSize, interval = this.refreshInterval) {
		setInterval(() => {
			this.el.style.transform = `scale(${this.randomVal(minSize, MaxSize)}%)`
		}, interval * 1000)
	}
	render(parentSelector) {
		super.render(parentSelector)
	}
}

const h1 = new House(castle)
h1.render('.task__body')
h1.dynamicChangeSize(30, 100, 0.5)
//========================================================================================================================================================

class Bird extends Parent {
	constructor(ItemDataObj) {
		super(ItemDataObj)
	}
	dynamicRandomPosition(minPos, MaxPos, interval = this.refreshInterval) {
		setInterval(() => {
			this.el.style.left = `${this.randomVal(minPos, MaxPos)}%`
			this.el.style.top = `${this.randomVal(minPos, MaxPos)}%`
		}, interval * 1000)
	}
	render(parentSelector) {
		super.render(parentSelector)
	}
}

const b1 = new Bird(bird)
b1.render('.task__body')
b1.dynamicRandomPosition(1, 70)
